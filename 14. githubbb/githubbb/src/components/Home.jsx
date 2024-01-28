import './index.css'
import { Navbar } from './Navbar'
import { Main } from './Main';


function Home(props) {
    return (
        <>
            <Navbar />
            <Main>
                {props.children}
            </ Main>
        </>
        
    );
}

export default Home;
