import { createPortal } from 'react-dom';

export default function ModalWrapper(props) {
  const modalRoot = document.getElementById('root');
  return createPortal(props.children, modalRoot);
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
