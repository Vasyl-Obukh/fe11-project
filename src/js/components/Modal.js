import React from 'react';
import { createPortal } from 'react-dom';

function ModalWrapper(props) {
  const modalRoot = document.getElementById('root');
  return createPortal(props.children, modalRoot);
}

export default function Modal({ onOutsideClick, handleHide, children }) {
  return (
    <ModalWrapper>
      <div
        className='modal-wrapper'
        onClick={e => onOutsideClick(e, 'modal-wrapper')}
      >
        <div className='modal-wrapper__window'>
          <button className='modal-wrapper__close' onClick={handleHide}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
}

export function handleShow() {
  this.setState({ showModal: true });
}

export function handleHide() {
  this.setState({ showModal: false });
}

export function onOutsideClick(e, wrapper) {
  e.target.getAttribute('class') === wrapper ? this.handleHide() : null;
}
