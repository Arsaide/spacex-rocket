import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../../Header.module.scss';

interface NavItemProps {
    to?: string;
    href?: string;
    color: string;
    children: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ to, href, color, children }) => {
    const linkStyle = { color };
    return (
        <li className={classNames(styles.menuItem, styles.btnAnim)}>
            {to ? (
                <NavLink to={to} style={linkStyle}>
                    {children}
                </NavLink>
            ) : (
                <a href={href} style={linkStyle}>
                    {children}
                </a>
            )}
        </li>
    );
};

export default NavItem;
