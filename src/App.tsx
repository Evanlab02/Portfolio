import { Outlet } from "react-router-dom";
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import Navigation from "./Components/Navigation";
import '@shoelace-style/shoelace/dist/themes/dark.css';
import "./Styles/app.scss";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/');

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  )
}
