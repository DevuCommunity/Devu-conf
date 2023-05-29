import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <div className="menu-nav">
        <NavLink to="/home">Inicio</NavLink>

        <NavLink to="/conf">Conf</NavLink>
      </div>
    </nav>
  );
};