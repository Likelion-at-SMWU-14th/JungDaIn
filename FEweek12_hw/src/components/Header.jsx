import { NavLink } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import "./Header.css";

function Header() {
  const totalCount = useCartStore((state) => state.getTotalCount());

  return (
    <header className="header">
      <NavLink to="/" className="header__logo" end>
        hachiware
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" end>
          shop
        </NavLink>
        <NavLink to="/cart">cart ({totalCount})</NavLink>
      </nav>
    </header>
  );
}

export default Header;
