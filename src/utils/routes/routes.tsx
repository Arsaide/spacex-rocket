import { createBrowserRouter } from 'react-router-dom';
import Page from '../../app/page/page.tsx';
import Layout from '../../components/layout/Layout.tsx';
import App from '../../app/App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/qwe',
                element: <Page />,
            },
        ],
    },
]);

export default router;
