import './style.css';

export const Repos = ()=>{
    return(
        <article className="repos d-flex flex-wrap gap-3 border">
            {[...Array(10).keys()].map((i) => {
                return (
                    <div className={`border fs-1 user-${i}`} key={i} >{`Repo ${i}`}</div>
                );
            })}
        </article>
    )
}