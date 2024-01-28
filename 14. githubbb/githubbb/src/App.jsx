import { Outlet } from "react-router-dom";

import { DataProvider } from './components/DataContext'

import { Navbar } from './components/Navbar'
import { Main } from './components/Main';
import './index.css'

function App() {
    return (
        <DataProvider>
            <Navbar />
            <Main>
                <Outlet />
            </ Main>
        </DataProvider>
    );
}

export default App;
