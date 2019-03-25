import React from 'react';
import ModalWrapper from './ModalWrapper';

export default function Modal({ onOutsideClick, handleHide, children }) {
  return (
    <ModalWrapper>
      <div
        className='modal-wrapper'
        onClick={e => onOutsideClick(e, 'modal-wrapper')}
      >
        <div className='modal modal-article'>
          <button className='modal--close' onClick={handleHide}>
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
