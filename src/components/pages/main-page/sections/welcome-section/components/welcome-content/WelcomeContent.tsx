import styles from './WelcomeContent.module.scss';
import '../../../../../../../../public/toy-rocket.gif';

const WelcomeContent = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                dive deep
                <br /> in to the
                <br /> future
            </h1>
            <div className={styles.img}>
                <img
                    src={'../../../../../../../../public/toy-rocket-mini.gif'}
                    alt={'Toy Rocket Gif'}
                />
            </div>
        </div>
    );
};

export default WelcomeContent;
