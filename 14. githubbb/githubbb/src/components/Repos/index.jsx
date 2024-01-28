import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
                    <div className={`border fs-1 repo-${id}`} key={id} >
                        <h4>{repo.name}</h4>
                        <p>{"repo.languages_url"}</p>
                        {repo.description?<p>{repo.description}</p>:null}
                    </div>
                );
            })}
        </article>
    )
}