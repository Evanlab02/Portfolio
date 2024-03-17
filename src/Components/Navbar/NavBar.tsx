import { lazy } from "react";
import Evan from "../../Assets/Evan.jpg";
import "./styles/NavBar.scss";

const SlIconButton = lazy(() => import('@shoelace-style/shoelace/dist/react/icon-button/index.js'));
const SlAvatar = lazy(() => import('@shoelace-style/shoelace/dist/react/avatar/index.js'));

export interface NavBarProps {
    pageTitle?: string;
}

export default function NavBar(props: Readonly<NavBarProps>) {
    const { pageTitle = "Overview" } = props;

    return (
        <header className="navbar">
            <div className="navbar-row">
                <div className="row-item">
                    <SlIconButton id="side-menu-icon-button" label="menu" name="list" ></SlIconButton>
                    <h2>{pageTitle}</h2>
                </div>
                <div className="row-item">
                    <SlAvatar image={Evan} ></SlAvatar>
                </div>
            </div>
        </header>
    );
}