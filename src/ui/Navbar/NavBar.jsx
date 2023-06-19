import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
      <div className="mobile-menu">
        <div className="menu-nav ">
          <NavLink to="/home">
            <img
              src="../../../assets/icons/home.svg"
              alt="home"
              className="icon-menu"
            />
          </NavLink>

          <NavLink to="/events">
            <img
              src="../../../assets/icons/event.svg"
              alt="event"
              className="icon-menu"
            />
          </NavLink>

          <NavLink to="/networks">
            {" "}

            <img
              src="../../../assets/icons/networks.svg"
              alt="networks"
              className="icon-menu"
            />
          </NavLink>
        </div>
      </div>

      <div className="desk-menu">
        <div className="menu-nav">
          <NavLink to="/home">Inicio</NavLink>

          <NavLink to="/events">Eventos</NavLink>

          <NavLink to="/networks">Eventos</NavLink>
        </div>
      </div>
    </nav>
  );
};
