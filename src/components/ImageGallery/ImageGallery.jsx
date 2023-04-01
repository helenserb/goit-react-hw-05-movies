import { Component } from 'react';
import API from '../../services/imagesApi'
import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle', 
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.props;

    if (prevProps.query !== query || ((prevProps.query === query && prevProps.page !== page))) {
      try {
        if (page === 1) {
          this.setState({ images: [] });
        }
        this.setState({ status: 'pending' });

        const data = await API.fetchImages(query, page);
        console.log(data);

        if (data.totalHits === 0) {
          return Promise.reject(
            new Error(`По вашому запиту ${query} нічого не знайдено`)
          );
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
        }))
      }
      catch (error){
        this.setState({ error, status: 'rejected' })
      }
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
                {images.map(
                  ({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem
                      key={id}
                      webformatURL={webformatURL}
                      largeImageURL={largeImageURL}
                      tags={tags}
                    />
                  )
                )}
              </ul>
              <Button incrementPage={this.props.onIncrementPage} />
            </>
          );
    }
  };
}
