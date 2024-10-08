import styles from './Header.module.scss';
import { settingMinMaxValue } from '../../../../utils/styles-func/settingMinMaxValue.ts';
import NavMenu from './components/nav-menu/NavMenu.tsx';
import { useScrollPosition } from '../../../../hooks/use-scroll-position/useScrollPosition.ts';
import BurgerMenu from './components/burger-menu/BurgerMenu.tsx';

const Header = () => {
    const { scrollPos } = useScrollPosition();

    return (
        <header
            className={styles.header}
            style={{ margin: `${settingMinMaxValue(scrollPos, 48, 5, 300)}px 0` }}
        >
            <div className={'cnt'}>
                <NavMenu scrollPos={scrollPos} />
            </div>
            <BurgerMenu scrollPos={scrollPos} />
        </header>
    );
};

export default Header;
