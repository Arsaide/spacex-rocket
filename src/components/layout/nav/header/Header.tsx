import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { settingValue } from '../../../../utils/styles-func/settingMinMaxValue.ts';
import NavMenu from './components/nav-menu/NavMenu.tsx';

const Header = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPos(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={styles.header}
            style={{ margin: `${settingValue(scrollPos, 48, 5, 300)}px 0` }}
        >
            <div className={'cnt'}>
                <NavMenu scrollPos={scrollPos} />
            </div>
        </header>
    );
};

export default Header;
