import styles from './loader.module.css'

function Loader() {
  return (
    <div className={styles['lds-roller']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loader
