import { Component } from "react";
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component{
    state = {
        
    }

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