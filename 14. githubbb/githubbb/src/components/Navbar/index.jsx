import './style.css'

export const Navbar = () => {
    return <nav className="navbar">
        <a className="navbar-brand ms-4" href="#">GitHuBBB</a>
        <div className="navbar-search">
            <div className="navbar-search-icon"></div>
            <input type="text" className='form-control' placeholder='Nome do usuário'/>
        </div>
    </nav>;
};