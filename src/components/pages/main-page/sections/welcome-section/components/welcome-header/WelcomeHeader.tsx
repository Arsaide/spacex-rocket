import styles from './WelcomeHeader.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const WelcomeHeader = () => {
    return (
        <nav className={styles.nav}>
            <div className={classNames(styles.btn, styles.btnAnim)}>
                <NavLink to={'/'}>LOGO</NavLink>
            </div>
            <ul className={styles.menu}>
                <li className={classNames(styles.menuItem, styles.btnAnim)}>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className={classNames(styles.menuItem, styles.btnAnim)}>
                    <a href={'#about'}>About</a>
                </li>
                <li className={classNames(styles.menuItem, styles.btnAnim)}>
                    <a href={'#team'}>Qa</a>
                </li>
                <li className={classNames(styles.menuItem, styles.btnAnim)}>
                    <NavLink to={'/contact-form'}>Contact form</NavLink>
                </li>
            </ul>
            <div className={classNames(styles.btn, styles.btnAnim)}>
                <NavLink to={'/contact-form'}>Contact form</NavLink>
            </div>
        </nav>
    );
};

export default WelcomeHeader;
