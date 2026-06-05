import styles from './Options.module.css'

const Options = () => {
    return (
        <div className={styles['options-container']}>
            <button className={styles['button']}>Good</button>
            <button className={styles['button']}>Neutral</button>
            <button className={styles['button']}>Bad</button>
        </div>
    )
}

export default Options