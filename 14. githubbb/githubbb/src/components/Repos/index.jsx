import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Repo = ({ repo, id, user }) => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${user}/${repo.name}/commits`)
            .then(response => {
                setCommits(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar commits", error);
            });
    }, [repo, user]);

    return (
        <div className={`border fs-1 repo-${id}`}>
            <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
            <p><strong>Número de commits: </strong>{commits.length}</p>
            <p><strong>Primeiro commit: </strong>{commits.length ? commits[0].commit.author.date : 'Não disponível'}</p>
            <p><strong>Último commit: </strong>{commits.length ? commits[commits.length - 1].commit.author.date : 'Não disponível'}</p>
            {repo.description ? <p><strong>Descrição: </strong>{repo.description}</p> : null}
        </div>
    );
}



export const Repos = ()=>{
    let { user } = useParams();
    user = user ? user : 'tiagolimar';
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                setRepos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar seguidores", error);
            });
    }, [user]);

    return(
        <article className="repos d-flex flex-wrap gap-3 border">
            {repos.map((repo,id) => {
                return (
                    <p key={id}>Dados do repositório</p>
                    // <Repo key={id} id={id} repo={repo} user={user} />
                );
            })}
        </article>
    )
}