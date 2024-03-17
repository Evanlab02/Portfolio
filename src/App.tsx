import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import "./Styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  )
}
