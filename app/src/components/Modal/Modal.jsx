import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { BsX } from 'react-icons/bs'
import styles from './modal.module.css'

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    state
    && (
    <ModalInner {...rest}>
        {children}
    </ModalInner>
    ),
    document.getElementById('modal-root'),
  )
}

function ModalInner({ children, onClose }) {
  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)
    return () => window.document.removeEventListener('keydown', escHandler)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <BsX className={styles.icon} />
        {children}
      </div>
    </div>
  )
}

export default Modal
