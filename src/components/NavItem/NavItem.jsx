import { NavLink } from "react-router-dom";
import "./NavItem.scss";

export default function NavItem({ children, to }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          if (isActive) {
            return "nav-link nav-link--active";
          }
          return "nav-link";
        }}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
