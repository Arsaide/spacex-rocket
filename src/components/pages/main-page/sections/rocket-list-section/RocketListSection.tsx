import classNames from 'classnames';
import styles from './RocketListSection.module.scss';
import RocketSwiper from './components/rocket-swiper/RocketSwiper.tsx';
import { useGetAllRockets } from '../../../../../hooks/queries/use-get-all-rockets/useGetAllRockets.ts';
import RocketListSkeleton from './components/rockets-list-skeleton/RocketListSkeleton.tsx';

const RocketListSection = () => {
    const { data, isLoading, isError, error } = useGetAllRockets();

    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <div className={classNames(styles.content)}>
                    <h2 className={styles.title}>Our rockets</h2>
                    {isLoading ? (
                        <RocketListSkeleton />
                    ) : isError ? (
                        <>Something went wrong... Error: {error?.message}</>
                    ) : data ? (
                        <div>
                            <RocketSwiper rockets={data} />
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default RocketListSection;
