import "./Navbar.scss";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";

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
        <li>
          <a
            className="navbar-help"
            onClick={() => {
              alert(
                "You can use the left click to orbit on the home page and on the explore page..."
              );
            }}
          >
            <BiHelpCircle size={(22, 22)} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
