import { Profile } from "./components/Profile";
import { Tabs } from './components/Tabs';
import "./style.css";

export const Main = (props) => {
    return (
        <main className="d-flex pt-4">
            <Profile />
            <section className="user-data container d-flex flex-column">
                <Tabs />
                <div className="tab-content position-relative" id="nav-tabContent">
                    {props.children}
                </div>
            </section>
        </main>
    );
};
