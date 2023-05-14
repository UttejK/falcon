import "./Navbar.scss";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src="/Falcon.svg" alt="FalconLogo" className="logo-image" />
        <h1>F.A.L.C.O.N</h1>
      </Link>
      <ul className="navbar-ul">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/explore/2">Explore</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
}
