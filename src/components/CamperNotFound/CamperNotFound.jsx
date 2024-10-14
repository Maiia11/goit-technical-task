import css from './CamperNotFound.module.css'

const CamperNotFound = () => {
  return (
<div className={css.container}>
        <div className={css.errorMessage}>
            <h1 className={css.errorTitle}>Camper Not Found</h1>
            <p className={css.errorDescription}>Sorry, the camper you are looking for does not exist.</p>
            <a href="/catalog" className={css.backButton}>Go Back to Home</a>
        </div>
    </div>
  )
}

export default CamperNotFound