import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div></div>
      <div>Categories</div>
      <div></div>
      <NavLink to="/" className="btn btn--white header__btn header__btn--left">
        Log in
      </NavLink>
      <NavLink to="/" className="btn btn--darkgreen header__btn">
        Sign up
      </NavLink>
    </header>
  );
};

export default Header;
