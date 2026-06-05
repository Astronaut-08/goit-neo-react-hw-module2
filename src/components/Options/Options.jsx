import styles from './Options.module.css'

const Options = ({updateFeedback}) => {
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
        </div>
    )
}

export default Options