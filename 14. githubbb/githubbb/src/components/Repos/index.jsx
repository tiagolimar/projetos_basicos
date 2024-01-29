import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './style.css';

function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

const Repo = ({ repo, id }) => {
    return (
        <div className={`repo fs-6 repo-${+id+1} ps-2 pb-4 position-relative`}>
            <div className="repo-bg ps-2 pt-2">
                <h4 className='text-center'>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h4>
                <p>
                    <strong>Criação: </strong>
                    {formatarData(repo.created_at)}
                </p>
                <p>
                    <strong>Atualização: </strong>
                    {formatarData(repo.updated_at)}
                </p>
                {repo.description ? <p><strong>Descrição: </strong>{repo.description}</p> : null}
            </div>
            <div className="num position-absolute text-center">{+id+1}</div>
        </div>
    );
}

export const Repos = ()=>{
    let { user } = useParams();
    user = user ? user : 'tiagolimar';
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                setRepos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar seguidores", error);
                setError('Falha ao carregar dados do perfil.');
            });
    }, [user]);

    return(
        <article className="repos row row-cols-lg-2 row-cols-1 mt-3">
            {error?<p className="text-danger">{error}</p>:
            repos.map((repo,id) => {
                return (
                    <Repo key={id} id={id} repo={repo} user={user} />
                );
            })}
        </article>
    )
}