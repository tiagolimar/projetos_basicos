import "./style.css";

const UserProfile = ()=>{
    return(
        <section className="user-profile d-flex flex-column align-items-center border">
            <a href="#" className="mt-5">
                <img src="#" alt="imagem de perfil do usuário" />
            </a>
            <h1 className="text-center mt-5">{"Nome do usuário"}</h1>
        </section>
    )
}

const UserFollowers = ()=>{
    return(
        <article className="user-followers d-flex flex-wrap gap-3 border mb-5">
            {[...Array(10).keys()].map((i) => {
                return (
                    <div className={`border fs-1 user-${i}`} key={i} >{`User ${i}`}</div>
                );
            })}
        </article>
    )
}

const UserRepositories = ()=>{
    return(
        <article className="user-repositories d-flex flex-wrap gap-3 border">
            {[...Array(10).keys()].map((i) => {
                return (
                    <div className={`border fs-1 user-${i}`} key={i} >{`User ${i}`}</div>
                );
            })}
        </article>
    )
}

export const Main = () => {
    return (
        <main className="d-flex">
            <UserProfile />
            <section className="user-data container d-flex flex-column">
                <UserFollowers />
                <UserRepositories />
            </section>
        </main>
    );
};
