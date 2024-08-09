import background from '../../../../../../public/background.jpeg';
import styles from './Starbase.module.scss';

const Starbase = () => {
    return (
        <section className={styles.section}>
            <img className={styles.background} src={background} alt={'Starship background image'} />
            <div className={styles.content}>
                <div className={'cnt'}>
                    <h4 className={styles.title}>starbase</h4>
                    <p className={styles.text}>
                        Development and manufacturing of Starship takes place at Starbase, one of
                        the world’s first commercial spaceports designed for orbital missions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Starbase;
