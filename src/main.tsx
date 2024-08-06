import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
