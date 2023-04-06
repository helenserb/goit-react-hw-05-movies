import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  return (
    <li key={id} className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={toggleModal}
      />
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};
// export default class ImageGalleryItem extends Component {
//   // state = {
  //   isShowModal: false,
  // };

  // toggleModal = () => {
  //   this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  // };

//   render = () => {
//     const { isShowModal } = this.state;
//     const { id, webformatURL, largeImageURL, tags } = this.props;

//     return (
//       <li key={id} className={css.ImageGalleryItem}>
//         <img
//           src={webformatURL}
//           alt={tags}
//           className={css.ImageGalleryItemImage}
//           onClick={this.toggleModal}
//         />
//         {isShowModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </li>
//     );
//   };
// }

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}