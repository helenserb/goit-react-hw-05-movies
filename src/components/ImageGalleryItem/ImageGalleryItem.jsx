import { Component } from 'react'
import css from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {

  render = () => {

    const { id, webformatURL, tags } = this.props;

      return (
        <li key={id} className={css.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.ImageGalleryItemImage}
          />
        </li>
      );
    };
  }
    


