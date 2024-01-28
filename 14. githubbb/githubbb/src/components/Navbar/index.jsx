import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css'

export const Navbar = () => {
    let navigate = useNavigate();
    let [search, setSearch] = useState('')

    const handleEnter = (e)=>{
        setSearch(e.target.value)

        if (e.key=='Enter'){
            navigate(`/${search}`)
        }
    }

    return <nav className="navbar">
        <Link className="navbar-brand ms-4" to='/'>GitHuBBB</Link>
        <div className="navbar-search">
            <div className="navbar-search-icon" onClick={()=>navigate(`/${search}`)}></div>
            <input type="text" className='form-control' placeholder='Nome do usuário' id='search' onKeyDown={e=>handleEnter(e)} onChange={e => setSearch(e.target.value)}/>
        </div>
    </nav>;
};