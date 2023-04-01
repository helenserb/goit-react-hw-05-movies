import { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../services/imagesApi'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css';

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

        if (data.totalHits === 0) {
          throw new Error(`По вашому запиту ${query} нічого не знайдено`);
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

    if (status === 'idle') {
          return;
        }

    if (status === 'pending') {
      return images.length > 0 ? (
        <>
          <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
          </ul>
          <Loader />
        </>
      ) : (
        <Loader />
      );
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

ImageGallery.propTypes = {
  onIncrementPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};