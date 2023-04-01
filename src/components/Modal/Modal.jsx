import { Component } from "react";
import css from './Modal.module.css'

export default class Modal extends Component{
    state = {
        
    }

    render = () => {
        const { children, onClose } = this.props;
        
        return (
          <div className={css.Overlay} onClick={onClose}>
            
              <div className={css.Modal}>{children}</div>

          </div>
        );
    }

}