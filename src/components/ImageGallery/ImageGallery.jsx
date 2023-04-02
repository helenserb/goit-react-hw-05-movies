
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';


export const ImageGallery = ({ onIncrementPage, images, isBtnShow }) => {
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
};


ImageGallery.propTypes = {
  onIncrementPage: PropTypes.func.isRequired,

};