import styles from './WelcomeSection.module.scss';
import WelcomeHeader from './components/welcome-header/WelcomeHeader.tsx';
import WelcomeContent from './components/welcome-content/WelcomeContent.tsx';
import WelcomeBottom from './components/welcome-bottom/WelcomeBottom.tsx';

const WelcomeSection = () => {
    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <div className={styles.content}>
                    <WelcomeHeader />
                    <WelcomeContent />
                    <WelcomeBottom />
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
