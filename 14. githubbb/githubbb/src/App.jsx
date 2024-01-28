import { Outlet } from "react-router-dom";

import { Navbar } from './components/Navbar'
import { Main } from './components/Main';
import './index.css'

function App() {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </ Main>
        </>
        
    );
}

export default App;
