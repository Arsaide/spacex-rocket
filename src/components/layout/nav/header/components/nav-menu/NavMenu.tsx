import { FC } from 'react';
import { setColorWithScroll } from '../../../../../../utils/styles-func/setTextColor.ts';
import { settingValue } from '../../../../../../utils/styles-func/settingMinMaxValue.ts';
import styles from '../../Header.module.scss';
import { getBackgroundRGBColor } from '../../../../../../utils/styles-func/setBackgroundRGBColor.ts';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NavItem from '../nav-item/NavItem.tsx';

interface NavMenuProps {
    scrollPos: number;
}

const NavMenu: FC<NavMenuProps> = ({ scrollPos }) => {
    const linkColor = setColorWithScroll(scrollPos, 300);
    const padding = `${settingValue(scrollPos, 32, 15, 600)}px 0`;

    return (
        <nav
            className={styles.nav}
            style={{
                padding,
                backgroundColor: getBackgroundRGBColor(600, scrollPos, '255, 255, 255', 0.7),
            }}
        >
            <div
                className={classNames(styles.btn, styles.btnAnim)}
                style={{ border: `1px solid ${linkColor}` }}
            >
                <NavLink
                    to={'/'}
                    style={{
                        color: setColorWithScroll(scrollPos, 300),
                    }}
                >
                    LOGO
                </NavLink>
            </div>
            <ul className={styles.menu}>
                <NavItem to={'/'} color={linkColor}>
                    Home
                </NavItem>
                <NavItem href={'#about'} color={linkColor}>
                    About
                </NavItem>
                <NavItem href={'#team'} color={linkColor}>
                    Qa
                </NavItem>
                <NavItem to={'/contact-form'} color={linkColor}>
                    Contact form
                </NavItem>
            </ul>
            <div
                className={classNames(styles.btn, styles.btnAnim)}
                style={{ border: `1px solid ${linkColor}` }}
            >
                <NavLink
                    to={'/contact-form'}
                    style={{
                        color: setColorWithScroll(scrollPos, 300),
                    }}
                >
                    Log In
                </NavLink>
            </div>
        </nav>
    );
};

export default NavMenu;
