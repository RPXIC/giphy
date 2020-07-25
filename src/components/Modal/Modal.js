import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.sass'

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__button" onClick={onClose}>ⓧ</button>
                {children}
            </div>
        </div>
    )
}

const ModalPortal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>{children}</Modal>,
        document.getElementById('modal-root')
    )
}

export default ModalPortal