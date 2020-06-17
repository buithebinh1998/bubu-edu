import React from "react";
import "./Header.scss";
import "../../style/styles.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/bubuedu.png"
const Header = () => {
  return (
    <header className="header">
      <div className="header__img" >
        <img src={Logo} alt="Logo BubuEdu"/>
      </div>
      <div>Categories</div>
      <div></div>
      <NavLink to="/" className="btn--white header__btn header__btn--left">
        Log in
      </NavLink>
      <NavLink to="/" className="btn--darkgreen header__btn" style={{color: 'white'}}>
        Sign up
      </NavLink>
    </header>
  );
};

export default Header;
