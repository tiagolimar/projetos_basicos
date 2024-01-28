import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css'

export const Profile = () => {
    const { user = 'tiagolimar' } = useParams();
    const [data, setData] = useState({ followers: 0, repos: 0, user: {} });
    const [error, setError] = useState('');

    useEffect(() => {
        Promise.all([
            axios.get(`https://api.github.com/users/${user}/followers`),
            axios.get(`https://api.github.com/users/${user}/repos`),
            axios.get(`https://api.github.com/users/${user}`)
        ]).then(([followersRes, reposRes, userRes]) => {
            setData({
                followers: followersRes.data.length,
                repos: reposRes.data.length,
                user: userRes.data
            });
        }).catch(error => {
            console.error("Erro ao buscar dados", error);
            setError('Falha ao carregar dados do perfil.');
        });
    }, [user]);

    return (
        <section className="profile d-flex flex-column align-items-center ps-4 pe-4 ">
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <>
                    <div className="user">
                        <a href={data.user.html_url || "#"} target='_blank' rel='noopener noreferrer'>
                            <img src={data.user.avatar_url || "#"} alt={`Perfil de ${data.user.login}`} />
                        </a>
                        <h2 className="text-center mt-1">{data.user.login}</h2>
                    </div>
                    <hr />
                    <div className="profile-info d-flex gap-1">
                        <p className="profile-info-followers text-secondary">{`${data.followers} seguidores`}</p>
                        <p className="text-secondary">|</p>
                        <p className="profile-info-repositories text-secondary">{`${data.repos} repositórios`}</p>
                    </div>
                </>
            )}
        </section>
    );
};
