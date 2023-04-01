import { Component } from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
      };
    
    render = () => {
        const { children, onClose } = this.props;
        
        return (
            createPortal(
                <div className={css.Overlay} onClick={onClose}>
                    <div className={css.Modal}>{children}</div>
                </div>, modalRoot)
        )
    }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};