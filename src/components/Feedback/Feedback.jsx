import styles from './Feedback.module.css'

const Feedback = ({obj}) => {
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
        </ul>
    )
}

export default Feedback