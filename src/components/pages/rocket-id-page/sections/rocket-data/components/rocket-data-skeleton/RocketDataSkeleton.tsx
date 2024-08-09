import styles from './RocketDataSkeleton.module.scss';

const RocketDataSkeleton = () => {
    return (
        <section className={styles.skeleton}>
            <div className={styles.title} />
            <div className={styles.content}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <div className={styles.name} />
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className={styles.row}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RocketDataSkeleton;
