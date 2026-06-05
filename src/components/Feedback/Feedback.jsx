import styles from './Feedback.module.css'

const Feedback = ({obj, status}) => {
    return (
        <ul className={styles['feedback-list']}>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Good: {obj.good ? obj.good : 0}</p>
            </li>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Neutral: {obj.neutral ? obj.neutral : 0}</p>
            </li>
            <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Bad: {obj.bad ? obj.bad : 0}</p>
            </li>
            {status && <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Total: {status}</p>
            </li>}
            {status && <li className={styles['feedback-item']}>
                <p className={styles['feedback-text']}>Positive: {100 - Math.round((obj.bad / status) * 100) || 0}%</p>
            </li>}
        </ul>
    )
}

export default Feedback