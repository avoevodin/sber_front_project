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
    <motion.div
      variants={modalWrVariants}
      initial="start"
      animate="show"
      exit="end"
      className={styles.wrapper}
    >
      <motion.div variants={modalInnerVariants} className={styles.inner}>
        <BsX className={styles.icon} />
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
