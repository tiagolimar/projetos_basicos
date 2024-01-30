import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import axios from 'axios';

import "./style.css";

export const Followers = () => {
    let { user } = useParams();
    user = user ? user : 'tiagolimar';
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/followers`)
            .then(response => {
                setFollowers(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar seguidores", error);
            });
    }, [user]);

    return (
        <article className="followers row row-cols-xl-6 row row-cols-lg-5 row-cols-md-3 row-cols-2">
            {followers.map((follower, i) => {
                return (
                    <div className="follower pt-3 mb-3" key={i}>
                        <Link to={`/${follower.login}`}>
                            <div className="espiar position-relative">
                                <img src={follower.avatar_url} alt={follower.login} />
                            </div>
                        </Link>
                        <h3 className="text-center fs-6 mt-2 pb-1">
                            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                                {follower.login}
                            </a>
                        </h3>
                    </div>
                );
            })}
        </article>
    );
};

