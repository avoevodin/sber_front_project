import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { BsX } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './modal.module.css'
import { modalInnerVariants, modalWrVariants } from './modalAnimation'

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {state && <ModalInner {...rest}>{children}</ModalInner>}
    </AnimatePresence>,
    document.getElementById('modal-root'),
  )
}

const ModalInner = ({ children, onClose }) => {
  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)
    return () => window.document.removeEventListener('keydown', escHandler)
  }, [])

  const closeClickHandler = () => {
    onClose()
  }

  const innerClickHandler = (e) => {
    e.stopPropagation()
  }

  return (
    <motion.div
      variants={modalWrVariants}
      initial="start"
      animate="show"
      exit="end"
      onClick={closeClickHandler}
      className={styles.wrapper}
    >
      <motion.div
        variants={modalInnerVariants}
        className={styles.inner}
        onClick={innerClickHandler}
      >
        <BsX role="button" className={styles.icon} onClick={closeClickHandler} />
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
