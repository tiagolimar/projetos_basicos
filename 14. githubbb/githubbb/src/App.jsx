import './index.css'
import { Navbar } from './components/Navbar'
import { Main } from './components/Main';

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

    QUANT. DE COMMITS https://api.github.com/repos/tiagolimar/algoritmos/commits
*/

function App() {
    return (
        <>
            <Navbar />
            <Main />
        </>
        
    );
}

export default App;
