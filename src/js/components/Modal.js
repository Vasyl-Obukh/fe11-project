import { createPortal } from 'react-dom';

export default function Modal(props) {
  const modalRoot = document.getElementById('root');
  return createPortal(
    props.children,
    modalRoot,
  );
}