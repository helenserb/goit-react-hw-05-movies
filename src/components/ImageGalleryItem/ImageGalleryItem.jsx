import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ images }) {

    return (
      images.hits.map(image => {
        return (
          <li key={image.id} className={css.ImageGalleryItem}>
            <img 
   
              src={image.webformatURL}
              alt=""
              className={css.ImageGalleryItemImage}
            />
          </li>
        )
      }))
  }

