import './style.css'

export const Followers = ()=>{
    return(
        <article className="followers d-flex flex-wrap gap-3 border mb-5">
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