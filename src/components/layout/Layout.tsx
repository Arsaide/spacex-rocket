import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className={'wrapper'}>
            <main className={'main'}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
