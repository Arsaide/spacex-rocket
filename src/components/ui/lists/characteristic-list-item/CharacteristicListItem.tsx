import { FC } from 'react';
import styles from './CharacteristicListItem.module.scss';

interface CharacteristicListItemProps {
    label: string;
    values?: string | number;
}

const CharacteristicListItem: FC<CharacteristicListItemProps> = ({ label, values }) => {
    return (
        <li className={styles.item}>
            <div className={styles.label}>{label}</div>
            {values && <div className={styles.values}>{values}</div>}
        </li>
    );
};

export default CharacteristicListItem;
