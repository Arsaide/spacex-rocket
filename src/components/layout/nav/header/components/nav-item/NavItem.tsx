import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../../Header.module.scss';

interface NavItemProps {
    to?: string;
    href?: string;
    color: string;
    children: ReactNode;
    className?: string;
}

const NavItem: FC<NavItemProps> = ({ to, href, color, children, ...props }) => {
    const linkStyle = { color };
    return (
        <li className={classNames(styles.menuItem, styles.btnAnim)}>
            {to ? (
                <NavLink to={to} style={linkStyle} {...props}>
                    {children}
                </NavLink>
            ) : (
                <a href={href} style={linkStyle} {...props}>
                    {children}
                </a>
            )}
        </li>
    );
};

export default NavItem;
