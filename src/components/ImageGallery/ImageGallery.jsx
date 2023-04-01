import { Component } from 'react';
import API from '../../services/imagesApi'
import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    images: null,
    status: 'idle', 
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      this.setState({ status: 'pending'});

      setTimeout(() => {
        API.fetchImages(query)
          .then(images => {
            if (images.totalHits === 0) {
              return Promise.reject(
                new Error(`По вашому запиту ${query} нічого не знайдено`)
              );
            }
            this.setState({ images, status: 'resolved' });
          })

          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }


  render = () => {
    const { images, error, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
        }

    if (status === 'rejected') {
          return <h2>{error.message}</h2>
    }
    
    if (status === 'resolved') {
          return (
        <>
              <ul className={css.ImageGallery}>
                <ImageGalleryItem images={images} />
              </ul>
        </>
      );
    }
  };
}
