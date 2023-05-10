import "./NavItem.scss";

export default function NavItem({ children }) {
  return (
    <li className="nav-item">
      <a href={children.toString().toLowerCase()}>{children}</a>
    </li>
  );
}
