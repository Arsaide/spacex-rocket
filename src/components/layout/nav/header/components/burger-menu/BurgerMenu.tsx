import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { setTextColorWithScroll } from '../../../../../../utils/styles-func/setTextColorWithScroll.ts';
import { FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useBurgerMenuStore } from '../../../../../../api/store/BurgerMenuStore.ts';

interface BurgerMenuProps {
    scrollPos: number;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ scrollPos }) => {
    const { isOpen, close } = useBurgerMenuStore();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const linkColor = setTextColorWithScroll(scrollPos, 300);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, close]);

    return (
        <div ref={menuRef} className={classNames(styles.menu, { [styles.menuOpen]: isOpen })}>
            {isOpen && (
                <ul className={styles.list}>
                    <NavLink
                        to={'/'}
                        className={classNames(styles.logo, styles.listItem)}
                        onClick={close}
                    >
                        LOGO
                    </NavLink>
                    <NavLink className={styles.listItem} to={'/'} onClick={close}>
                        Home
                    </NavLink>
                    <a className={styles.listItem} href={'#about'} onClick={close}>
                        About
                    </a>
                    <a className={styles.listItem} href={'#team'} color={linkColor} onClick={close}>
                        Qa
                    </a>
                    <NavLink
                        className={styles.listItem}
                        to={'/contact-form'}
                        color={linkColor}
                        onClick={close}
                    >
                        Contact form
                    </NavLink>
                </ul>
            )}
        </div>
    );
};

export default BurgerMenu;
