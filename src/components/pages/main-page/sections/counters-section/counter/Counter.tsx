import { FC, useEffect, useRef, useState } from 'react';
import styles from './Counter.module.scss'

interface CounterProps {
    value: number;
    label: string;
    interval: number;
}

const Counter:FC<CounterProps> = ({value, label, interval}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let startNumber = 0;
            const countInterval = interval;
            const i = 1;

            const counterUp = () => {
                startNumber += i;
                if (startNumber >= value) {
                    setCount(value);
                    return true;
                } else {
                    setCount(startNumber);
                    return false;
                }
            };

            const timer = setInterval(() => {
                if (counterUp()) {
                    clearInterval(timer);
                }
            }, countInterval);

            return () => clearInterval(timer);
        }
    }, [interval, isVisible, value]);

    return (
        <div ref={counterRef} className={styles.counter}>
            <div className={styles.value}>{count}</div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default Counter;