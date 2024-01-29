import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { Followers } from './components/Followers';
import { Repos } from './components/Repos';
import { Error } from './components/Error';
import "./index.css";

/*
DADOS DO USUÁRIO/SEGUIDORES
https://api.github.com/users/${username}
	login	        nome de usuário
	html_url	    url do github do usuário
	avatar_url	    url da imagem de perfil do usuário
	followers_url	url dos seguidores
	repos_url	    url dos repositórios do usuário

DADOS DOS REPOSITÓRIOS
https://api.github.com/users/${username}/repos
    name            nome do repositório
    html_url        url do repositório
    languages_url   url das linguagens utilizadas no projeto
    description     descrição do repositório
    dia do último comit
    QUANT. DE COMMITS https://api.github.com/repos/tiagolimar/algoritmos/commits
*/

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