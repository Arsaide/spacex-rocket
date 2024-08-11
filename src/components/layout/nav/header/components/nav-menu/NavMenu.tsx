import { FC } from 'react';
import { setTextColorWithScroll } from '../../../../../../utils/styles-func/setTextColorWithScroll.ts';
import { settingMinMaxValue } from '../../../../../../utils/styles-func/settingMinMaxValue.ts';
import styles from '../../Header.module.scss';
import { setBackgroundRGBColor } from '../../../../../../utils/styles-func/setBackgroundRGBColor.ts';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NavItem from '../nav-item/NavItem.tsx';
import SignInWithGoogleBtn from '../../../../../ui/btns/sign-google-btn/SignGoogleBtn.tsx';
import { useAuthStore } from '../../../../../../api/store/AuthStore.ts';
import NavProfile from '../nav-profile/NavProfile.tsx';

interface NavMenuProps {
    scrollPos: number;
}

const NavMenu: FC<NavMenuProps> = ({ scrollPos }) => {
    const { isAuthenticated } = useAuthStore();
    const linkColor = setTextColorWithScroll(scrollPos, 300);
    const padding = `${settingMinMaxValue(scrollPos, 32, 15, 600)}px 0`;

    return (
        <nav
            className={styles.nav}
            style={{
                padding,
                backgroundColor: setBackgroundRGBColor(600, scrollPos, '255, 255, 255', 0.7),
            }}
        >
            <div
                className={classNames(styles.btn, styles.btnAnim)}
                style={{ border: `1px solid ${linkColor}` }}
            >
                <NavLink
                    to={'/'}
                    style={{
                        color: setTextColorWithScroll(scrollPos, 300),
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
            <div className={styles.btns}>
                {isAuthenticated ? (
                    <NavProfile />
                ) : (
                    <>
                        <SignInWithGoogleBtn scrollPos={scrollPos} />
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavMenu;
