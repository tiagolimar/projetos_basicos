import { Profile } from "./components/Profile";
import { Tabs } from './components/Tabs';
import "./style.css";

export const Main = (props) => {
    
    return (
        <main className="d-flex pt-4 mb-5">
            <Profile />
            <section className="user-data container d-flex flex-column">
                <Tabs />
                <div className="ps-lg-3 pe-lg-3">
                    {props.children}
                </div>
            </section>
        </main>
    );
};
