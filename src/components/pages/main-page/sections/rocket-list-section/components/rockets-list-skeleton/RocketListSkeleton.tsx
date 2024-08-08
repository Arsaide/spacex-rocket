import CardSkeleton from './card-skeleton/CardSkeleton.tsx';
import Arrow from '../../../../../../../lib/icons/Arrow.tsx';
import styles from './RocketsListSkeleton.module.scss'

const RocketListSkeleton = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.skeletons}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
            <div className={styles.pagination}>
                <div
                    className={styles.arrow}
                >
                    <Arrow direction={'left'} size={30} />
                </div>
                <div
                    className={styles.arrow}
                >
                    <Arrow direction={'right'} size={30} />
                </div>
            </div>
        </div>
    );
};

export default RocketListSkeleton;