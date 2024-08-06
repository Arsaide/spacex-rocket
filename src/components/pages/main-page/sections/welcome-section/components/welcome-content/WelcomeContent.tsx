import styles from './WelcomeContent.module.scss';
import '../../../../../../../../public/toy-rocket.gif';
import RocketGif from '../../../../../../../../public/toy-rocket-mini.gif';

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
                    src={RocketGif}
                    alt={'Toy Rocket Gif'}
                />
            </div>
        </div>
    );
};

export default WelcomeContent;
