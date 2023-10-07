import { NavLink } from "react-router-dom";

import '../App.css'

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active"); // uso de clase active (punto 1)

  return (
    <nav className="navbar navbar-expand-lg justify-content-center fixed-top text-bg-primary">
      <div className="container">
        <div>
        <NavLink className={ setActiveClass } to='/*'>
          <i className="bi bi-geo-alt"></i>
        </NavLink>
        </div>
        <div className='nav-detalle'>
        <NavLink className={ setActiveClass } to="/">
          Home
        </NavLink>
        <NavLink className={ setActiveClass } to="/pokemones">
          Pokemones
        </NavLink>
        </div>       
      </div>
    </nav>
);
}