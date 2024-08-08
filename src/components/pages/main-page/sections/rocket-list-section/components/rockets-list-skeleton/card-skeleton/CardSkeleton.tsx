import styles from './CardSkeleton.module.scss'

const CardSkeleton = () => {
    return (
        <div className={styles.card}>
            <div className={styles.imgCnt}></div>
            <div className={styles.name}></div>
            <div className={styles.characteristics}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    );
};

export default CardSkeleton;