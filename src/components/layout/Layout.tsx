import { Outlet } from 'react-router-dom';
import Header from './nav/header/Header.tsx';

const Layout = () => {
    return (
        <div className={'wrapper'}>
            <main className={'main'}>
                <Header />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
