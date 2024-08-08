import styles from './CounterSection.module.scss';
import Counter from './counter/Counter.tsx';

const CounterSection = () => {
    return (
        <section className={styles.section}>
            <div className={'cnt'}>
                <div className={styles.content}>
                    <Counter value={42} interval={50} label={'total LAUNCHES!'}/>
                    <Counter value={46} interval={70} label={'visits TO the ISS!'}/>
                    <Counter value={25} interval={150} label={'TOTAL RefLIghTS!'}/>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;