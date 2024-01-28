import { Link } from 'react-router-dom';
import './style.css';

export const Tabs = ()=>{
    return(
        <nav className="nav-tabs d-flex justify-content-evenly mb-2">
            <Link to='/seguidores'>Seguidores</Link>
            <Link to='/repositorios' >Repositórios</Link>
        </nav>
    )
}