import "./Navbar.scss";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to={import.meta.env.BASE_URL}>
        <img
          src={import.meta.env.BASE_URL + "FalconTiny.svg"}
          alt="FalconLogo"
          className="logo-image"
          height={"50px"}
          width={"50px"}
        />
        <h1>F.A.L.C.O.N</h1>
      </Link>
      <ul className="navbar-ul">
        <NavItem to="">Home</NavItem>
        <NavItem to="about">About</NavItem>
        <li>
          <a
            className="nav-link nav-link--active"
            style={{ padding: "1rem" }}
            onClick={() => {
              alert(
                "You can use the left click to orbit on the home page and on the explore page..."
              );
            }}
          >
            <BiHelpCircle size={(22, 22)} />
          </a>
        </li>
        <li>
          <a
            className="nav-link nav-link--active"
            style={{ padding: "1rem" }}
            href="https://github.com/UttejK"
            target="_blank"
          >
            <BsGithub size={(22, 22)} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
