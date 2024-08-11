import ReactDOM from 'react-dom/client';
import './global.scss';
import { RouterProvider } from 'react-router-dom';
import router from './utils/routes/routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClientConfig } from './utils/queryClientConfig.ts';
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient(queryClientConfig);
const domain = 'dev-e8m3fhm4vl3uu3by.eu.auth0.com';
const clientId = '1KBnmEgF534ZqvVlEHBb8ms6lfwxtU1l';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
);
