import Modal from 'components/Modal/Modal';
import { Component } from 'react'


import css from './ImageGalleryItem.module.css'




export default class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render = () => {
    const { isShowModal } = this.state;
    const { id, webformatURL, largeImageURL, tags } = this.props;

    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {isShowModal && (
              <Modal onClose={this.toggleModal}>
                <img src={largeImageURL} alt={tags} />
              </Modal>
            )
        }
      </li>
    );
  };
}
    


