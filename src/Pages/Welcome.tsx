import { Suspense, lazy } from "react";
import Spinner from "../Components/Loaders/Spinner";
import "./Styles/Welcome.scss";

const NavBar = lazy(() => import('../Components/Navbar/NavBar'));

export default function Overview() {
    return (
        <Suspense fallback={<Spinner />}>
            <div className="welcome-page">
                <NavBar pageTitle="Welcome" />
                <div className="page-content">
                    <h1 className="page-title">Hi, my name is Evan</h1>
                    <ul className="centered-list">
                        <li>Associate Software Engineer</li>
                        <li>Experience with python, react and more</li>
                        <li>Been in the industry for <strong>1</strong> year</li>
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}