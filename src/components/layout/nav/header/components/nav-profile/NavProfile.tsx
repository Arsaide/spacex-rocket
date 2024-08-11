import { useEffect, useRef, useState } from 'react';
import styles from './NavProfile.module.scss';
import { useAuthStore } from '../../../../../../api/store/AuthStore.ts';
import { setTextColorWithScroll } from '../../../../../../utils/styles-func/setTextColorWithScroll.ts';
import { useScrollPosition } from '../../../../../../hooks/use-scroll-position/useScrollPosition.ts';
import { NavLink } from 'react-router-dom';

const NavProfile = () => {
    const { user, logout } = useAuthStore();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const { scrollPos } = useScrollPosition();
    const linkColor = setTextColorWithScroll(scrollPos, 300);

    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleOutsideClick = () => {
        if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
            setIsOpenMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div
            className={styles.profile}
            style={{
                border: `1px solid ${linkColor}`,
            }}
            onClick={e => e.stopPropagation()}
        >
            {user && (
                <button
                    className={styles.avatar}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    style={{ color: setTextColorWithScroll(scrollPos, 300) }}
                >
                    <div className={styles.name}>{user.name}</div>
                    <img src={user.picture || ''} alt={`${user.name} avatar`} />
                </button>
            )}
            {isOpenMenu && (
                <div className={styles.menu} ref={menuRef}>
                    <NavLink to={`/profile?uid=${user?.uid}`} className={styles.link}>
                        Profile
                    </NavLink>
                    <button onClick={logout} className={styles.link}>
                        Log out
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavProfile;
