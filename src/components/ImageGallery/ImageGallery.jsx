
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';

import css from './ImageGallery.module.css';


export const ImageGallery = ({ onIncrementPage, images, isBtnShow, status, error }) => {
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
    return <h2>{error.message}</h2>;
  }
  if (status === 'resolved') {
    return (
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
        {isBtnShow && <Button incrementPage={onIncrementPage} />}
      </>
    );
  }
}



  ImageGallery.propTypes = {
    onIncrementPage: PropTypes.func.isRequired,
  }