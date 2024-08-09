import { useGetOneRocket } from '../../../../../hooks/queries/use-get-one-rocket/useGetOneRocket.ts';
import { useSearchParams } from 'react-router-dom';
import styles from './RocketData.module.scss';
import DisplayRocketData from './components/display-rocket-data/DisplayRocketData.tsx';
import RocketDataSkeleton from './components/rocket-data-skeleton/RocketDataSkeleton.tsx';

const RocketDataSection = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const { data, isLoading, isError } = useGetOneRocket(id);

    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <div className={styles.content}>
                    {(isLoading || isError) && <RocketDataSkeleton />}
                    {data && <DisplayRocketData data={data} />}
                </div>
            </div>
        </section>
    );
};

export default RocketDataSection;
