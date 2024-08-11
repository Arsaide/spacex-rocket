import styles from './ProfileSection.module.scss';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useGetUser } from '../../../../../hooks/queries/use-get-user/useGetUser.ts';
import CharacteristicListItem from '../../../../ui/lists/characteristic-list-item/CharacteristicListItem.tsx';
import SkeletonProfile from './skeleton-profile/SkeletonProfile.tsx';

const ProfileSection = () => {
    const [searchParams] = useSearchParams();
    const uid = searchParams.get('uid');
    const { data, isLoading, isError } = useGetUser(uid);

    if (isLoading || isError) {
        return <SkeletonProfile />;
    }

    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <h2 className={styles.title}>Profile</h2>
                <div className={styles.content}>
                    <div className={styles.avatar}>
                        <div className={styles.imgCnt}>
                            <img src={data?.picture} alt={`Displayed ${data?.name} avatar`} />
                        </div>
                    </div>
                    <ul className={styles.data}>
                        <CharacteristicListItem label={`Name: ${data?.name}`} />
                        <CharacteristicListItem label={`Email: ${data?.email}`} />
                    </ul>
                </div>
                <div className={styles.favourites}>
                    <h3 className={styles.subTitle}>My Favourites</h3>
                    <ul className={styles.list}>
                        {data?.favourites && data?.favourites.length > 0 ? (
                            data?.favourites.map(item => (
                                <li key={item.id} className={styles.item}>
                                    <NavLink
                                        to={`/rocket?id=${item.id}`}
                                        className={styles.itemContent}
                                    >
                                        <div className={styles.listImg}>
                                            <img
                                                src={item.flickr_images[0]}
                                                alt={`Displayed ${item.name} image`}
                                            />
                                        </div>
                                        <div className={styles.info}>
                                            <div>Company name: {item.company}</div>
                                            <div>Rocket name: {item.name}</div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))
                        ) : (
                            <p className={styles.empty}>Favourites list is empty!</p>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
