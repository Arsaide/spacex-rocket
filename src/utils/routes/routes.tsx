import {createBrowserRouter} from "react-router-dom";
import App from "../../app/App.tsx";
import Page from "../../app/page/page.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/qwe',
        element: <Page/>
    }
]);
