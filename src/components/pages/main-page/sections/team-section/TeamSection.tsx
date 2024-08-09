import styles from './TeamSection.module.scss';
import TeamSwiper from './components/team-swiper/TeamSwiper.tsx';

const TeamSection = () => {
    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <div className={styles.content}>
                    <TeamSwiper />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
