import styles from '../Btn.module.scss';
import { setTextColorWithScroll } from '../../../../utils/styles-func/setTextColorWithScroll.ts';
import { linkColor } from '../index.ts';
import { FC } from 'react';
import { useAuthStore } from '../../../../api/store/AuthStore.ts';

interface LogoutBtnProps {
    scrollPos: number;
}

const LogoutBtn: FC<LogoutBtnProps> = ({ scrollPos }) => {
    const { logout } = useAuthStore();

    return (
        <button
            className={styles.btn}
            onClick={logout}
            style={{
                color: setTextColorWithScroll(scrollPos, 300),
                border: `1px solid ${linkColor(scrollPos)}`,
            }}
        >
            Logout
        </button>
    );
};

export default LogoutBtn;
