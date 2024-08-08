import styles from './WelcomeSection.module.scss';
import WelcomeHeader from './components/welcome-header/WelcomeHeader.tsx';
import classNames from 'classnames';
import WelcomeContent from './components/welcome-content/WelcomeContent.tsx';
import WelcomeBottom from './components/welcome-bottom/WelcomeBottom.tsx';

const WelcomeSection = () => {
    return (
        <section className={styles.section}>
            <div className={classNames('cnt', styles.content)}>
                <WelcomeHeader />
                <WelcomeContent />
                <WelcomeBottom />
            </div>
        </section>
    );
};

export default WelcomeSection;
