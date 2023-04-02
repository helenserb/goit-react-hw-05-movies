import { Component } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import API from '../services/imagesApi';
import Searchbar from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery';
// import Loader from 'components/Loader/Loader';
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


export default class App extends Component {
  state = {
    query: '',
    page: 1,
    isButtonShow: false,
    images: [],
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== query ||
      (prevState.query === query && prevState.page !== page)
    ) {
      this.setState({ status: 'pending' });
      try {
        const data = await API.fetchImages(query, page);

        if (data.totalHits === 0) {
          throw new Error(`По вашому запиту ${query} нічого не знайдено`);
        }
        if (page === 1) {
          this.setState({ images: [] });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
          isButtonShow: page < Math.ceil(data.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render = () => {

    const { images, error, status, isButtonShow } = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={images}
          onIncrementPage={this.incrementPage}
          isBtnShow={isButtonShow}
          status={status}
          error={error}
        />
        
        <ToastContainer autoClose={3000} />
      </div>
    )
  };
}
