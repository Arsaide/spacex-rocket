import styles from './WelcomeBottom.module.scss';
import PlanetIcon from '../../../../../../../lib/icons/PlanetIcon.tsx';

const WelcomeBottom = () => {
    return (
        <div className={styles.content}>
            <div className={styles.icon}>
                <PlanetIcon />
            </div>
            <div className={styles.line} />
        </div>
    );
};

export default WelcomeBottom;
