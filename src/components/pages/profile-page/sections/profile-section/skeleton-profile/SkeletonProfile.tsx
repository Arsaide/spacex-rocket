import styles from './SkeletonProfile.module.scss';

const SkeletonProfile = () => {
    return (
        <section className={styles.section}>
            <div className="cnt">
                <h2 className={styles.title}>Profile</h2>
                <div className={styles.content}>
                    <div className={styles.profile} />
                    <div className={styles.favourites} />
                </div>
            </div>
        </section>
    );
};

export default SkeletonProfile;
