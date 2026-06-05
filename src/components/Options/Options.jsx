import styles from './Options.module.css'

const Options = ({updateFeedback, status}) => {
    return (
        <div className={styles['options-container']}>
            <button className={styles['button']} onClick={() => updateFeedback('good')}>
                Good
            </button>
            <button className={styles['button']} onClick={() => updateFeedback('neutral')}>
                Neutral
            </button>
            <button className={styles['button']} onClick={() => updateFeedback('bad')}>
                Bad
            </button>
            {status ? <button className={styles['button']} onClick={() => updateFeedback('reset')}>
                Reset
            </button> : null}
        </div>
    )
}

export default Options