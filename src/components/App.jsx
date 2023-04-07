import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import API from '../services/imagesApi';
import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isButtonShow, setIsButtonShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);
    API.fetchImages(query, page).then(data => {
        setImages(prevState => [...prevState, ...data.hits]);
        setIsButtonShow(page < Math.ceil(data.totalHits / 12));

        if (data.totalHits === 0) {
          setIsLoading(false);
          throw new Error(`По вашому запиту ${query} нічого не знайдено`);
        }
      }).catch(error => setError(error)).finally(setIsLoading(false))
  }, [page, query]);



  //   try {
  //     const data = API.fetchImages(query, page);
  //     console.log(data);

  //     if (data.totalHits === 0) {
  //       setIsLoading(false);
  //       throw new Error(`По вашому запиту ${query} нічого не знайдено`);
  //     }
  //     setImages(prevState => [...prevState, ...data.hits]);
  //     setIsButtonShow(page < Math.ceil(data.totalHits / 12));
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [page, query]);



  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError('')
  };

const incrementPage = () => {
    setPage(prevState => (prevState + 1 ));
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      {images && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isButtonShow && <Button incrementPage={incrementPage} />}
      {error && <h2>{error.message}</h2>}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
