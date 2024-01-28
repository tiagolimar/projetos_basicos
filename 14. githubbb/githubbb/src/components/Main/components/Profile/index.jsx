import './style.css'

export const Profile = ()=>{
    return(
        <section className="profile d-flex flex-column align-items-center ps-4 pe-4 ">
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