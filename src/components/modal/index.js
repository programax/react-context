import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { AppContext } from '../../context/appContext';

class Modal extends React.Component {
    render() {
        const {
            toggleModal,
        } = this.context;

        const node = (
            <div
                className="modal-container"
                onClick={(e) => {
                    if (e.target.className === 'modal-container') {
                        toggleModal();
                    }
                }}
            >
                <div className="modal">
                    <h1>modal</h1>
                </div>
            </div>
        );

        return ReactDOM.createPortal(node, document.getElementById('modal'));
    }
}

Modal.contextType = AppContext;

export default Modal;
