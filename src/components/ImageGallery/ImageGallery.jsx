import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

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
        fetch(
          `https://pixabay.com/api/?q=${query}&page=1&key=33447943-79d2196749f400a54d8eaf5fb&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (!response.ok) {
              return Promise.reject(new Error(`Упс! Щось пішло не так. Повторіть спробу`))
          }
              return response.json()
            })            
          .then(images => {
            if (images.totalHits === 0) {
              return Promise.reject(new Error(`По вашому запиту ${query} нічого не знайдено`))
            }
            this.setState({ images, status: 'resolved' })
          })
            
          .catch(error => this.setState({error, status: 'rejected'}))
      }, 1000);
    }
  }


  render = () => {
    const { images, error, status } = this.state;

    if (status === 'pending') {
          return <h2>Загружаем ...</h2>;
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
