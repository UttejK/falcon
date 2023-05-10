import "./NavItem.css";

export default function NavItem({ children }) {
  return (
    <li className="nav-item">
      <a href={children}>{children}</a>
    </li>
  );
}
