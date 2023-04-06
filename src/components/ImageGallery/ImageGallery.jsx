
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';


export const ImageGallery = ({ images}) => {

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
      </>
    );
  }



