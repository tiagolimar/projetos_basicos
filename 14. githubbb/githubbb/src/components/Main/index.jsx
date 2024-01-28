import "./style.css";

const Profile = ()=>{
    return(
        <section className="profile d-flex flex-column align-items-center">
            <div className="user">
                <a href={"#"}>
                    <img src={"#"} alt="imagem de perfil do usuário" />
                </a>
                <h2 className="text-center mt-4">{"Nomedousuário"}</h2>
            </div>
            <hr />
            <div className="profile-info d-flex gap-1">
                <p className="profile-info-followers text-secondary">{`${1000} seguidores`}</p>
                <p className="text-secondary">|</p>
                <p className="profile-info-repositories text-secondary">{`${1000} resitórios`}</p>
            </div>
        </section>
    )
}

const Followers = ()=>{
    return(
        <article className="followers d-flex flex-wrap gap-3 border mb-5 tab-pane fade show active"  id="nav-followers" role="tabpanel" aria-labelledby="nav-followers-tab" tabIndex="0">
            {[...Array(10).keys()].map((i) => {
                return (
                    <div className="follower border" key={i}>
                        <a href={"#"}>
                            <img src={"#"} alt="imagem de perfil do usuário" />
                        </a>
                        <h3 className="text-center fs-5 mt-2">{"Nomedousuário"}</h3>
                    </div>
                );
            })}
        </article>
    )
}

const Repositories = ()=>{
    return(
        <article className="repositories d-flex flex-wrap gap-3 border tab-pane fade"  id="nav-repos" role="tabpanel" aria-labelledby="nav-repos-tab" tabIndex="0">
            {[...Array(10).keys()].map((i) => {
                return (
                    <div className={`border fs-1 user-${i}`} key={i} >{`Repo ${i}`}</div>
                );
            })}
        </article>
    )
}

const Tabs = ()=>{
    return(
        <nav className="nav nav-tabs d-flex justify-content-evenly mb-2" id="nav-tab" role="tablist">
            <button 
                className="tab-user nav-link active" 
                id="nav-followers-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#nav-followers" 
                type="button" 
                role="tab" 
                aria-controls="nav-followers" 
                aria-selected="true">Seguidores</button>

            <button 
                className="tab-repo nav-link" 
                id="nav-profile-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#nav-repos" 
                type="button" 
                role="tab" 
                aria-controls="nav-repos" 
                aria-selected="false">Repositórios</button>
        </nav>
    )
}

export const Main = () => {
    return (
        <main className="d-flex pt-4">
            <Profile />
            <section className="user-data container d-flex flex-column">
                <Tabs />
                <div className="tab-content" id="nav-tabContent">
                    <Followers />
                    <Repositories />
                </div>
            </section>
        </main>
    );
};
