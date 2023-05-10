import "./Navbar.css";
import NavItem from "../NavItem/NavItem";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>Logo</span>
      <ul className="navbar-ul">
        <NavItem props>Home</NavItem>
        <NavItem props>Explore</NavItem>
        <NavItem props>About</NavItem>
        <NavItem props>Contact</NavItem>
      </ul>
    </nav>
  );
}
