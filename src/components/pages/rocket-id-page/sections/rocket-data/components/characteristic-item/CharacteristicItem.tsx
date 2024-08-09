import { FC } from 'react';
import styles from '../display-rocket-data/DisplayRocketData.module.scss';

interface CharacteristicItemProps {
    label: string;
    values: string | number;
}

const CharacteristicItem: FC<CharacteristicItemProps> = ({ label, values }) => {
    return (
        <li className={styles.item}>
            <div className={styles.label}>{label}:</div>
            <div className={styles.values}>{values}</div>
        </li>
    );
};

export default CharacteristicItem;
