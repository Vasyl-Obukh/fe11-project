import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function ModalWrapper(props) {
  const modalRoot = document.getElementById('root');
  return createPortal(props.children, modalRoot);
}

export default function Modal({ onOutsideClick, handleHide, children }) {
  const wrapperClass = 'modal-wrapper';
  return (
    <ModalWrapper>
      <div
        className={wrapperClass}
        onClick={e => onOutsideClick(e, wrapperClass)}
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

Modal.propTypes = {
  onOutsideClick: PropTypes.func,
  handleHide: PropTypes.func.isRequired,
  children: PropTypes.node
};
