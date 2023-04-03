import { Component } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import API from '../services/imagesApi';
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    isButtonShow: false,
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== query ||
      ( prevState.page !== page)
    ) {
      this.setState({ isLoading: true });
      try {
        const data = await API.fetchImages(query, page);

        if (data.totalHits === 0) {
          this.setState({ isLoading: false });
          throw new Error(`По вашому запиту ${query} нічого не знайдено`);
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isButtonShow: page < Math.ceil(data.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [], error:'' });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render = () => {

    const { images, error, isButtonShow, incrementPage, isLoading} = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {isButtonShow && <Button incrementPage={incrementPage} />}
        {error && <h2>{error.message}</h2>}
        <ToastContainer autoClose={3000} />
      </div>
    );
  };
}