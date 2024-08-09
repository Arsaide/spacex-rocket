import styles from './WelcomeSection.module.scss';
import WelcomeContent from './components/welcome-content/WelcomeContent.tsx';
import WelcomeBottom from './components/welcome-bottom/WelcomeBottom.tsx';

const WelcomeSection = () => {
    return (
        <section className={styles.section} id={'main'}>
            <div className={'cnt'}>
                <div className={styles.content}>
                    <WelcomeContent />
                    <WelcomeBottom />
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
