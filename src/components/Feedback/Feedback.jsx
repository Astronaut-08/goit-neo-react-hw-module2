import styles from './Feedback.module.css'

const Feedback = (obj) => {
    return (
        <ul className={styles['feedback-list']}>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Good: {obj.good}</p>
            </li>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Neutral: {obj.neutral}</p>
            </li>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Bad: {obj.bad}</p>
            </li>
        </ul>
    )
}

export default Feedback