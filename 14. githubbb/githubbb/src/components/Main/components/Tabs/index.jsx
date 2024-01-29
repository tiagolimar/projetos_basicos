import { Link, useParams } from 'react-router-dom';
import './style.css';

export const Tabs = ()=>{
    const { user = 'tiagolimar' } = useParams();
    return(
        <nav className="nav-tabs d-flex justify-content-evenly mb-2">
            <Link to={`/${user}`} className='border'>Seguidores</Link>
            <Link to={`/${user}/repositorios`} className='border'>Repositórios</Link>
        </nav>
    )
}