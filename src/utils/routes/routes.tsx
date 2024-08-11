import { createBrowserRouter } from 'react-router-dom';
import RocketId from '../../app/rocket-id/RocketId.tsx';
import Layout from '../../components/layout/Layout.tsx';
import Main from '../../app/main/Main.tsx';
import Profile from '../../app/profile/page.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/rocket',
                element: <RocketId />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
        ],
    },
]);

export default router;
