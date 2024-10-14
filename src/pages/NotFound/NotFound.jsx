import css from "./NotFound.module.css"

const NotFound = () => {
    return (
        <div className={css.container}>
            <h1 className={css.errorCode}>404</h1>
            <h2 className={css.errorMessage}>Oops! Page not found</h2>
            <p className={css.errorDescription}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" className={css.btn}>Back to Home</a>
        </div>
    )
};

export default NotFound