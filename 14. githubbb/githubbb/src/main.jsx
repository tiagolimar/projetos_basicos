import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { Followers } from './components/Followers';
import { Repos } from './components/Repos';
import { Error } from './components/Error';
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Followers />,
                errorElement: <Error />,
            },
            {
                path: "/:user",
                element: <Followers />,
                errorElement: <Error />,
            },
            {
                path: "/:user/repositorios",
                element: <Repos />,
                errorElement: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);