import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../svg/Logo";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="header_middle">
        <div className="logo_name">Brew Coffee</div>
      </div>
      <div className="header_right">
        <Link to="/" className="auth_link hover1">
          Home
        </Link>
        <Link to="/menu" className="auth_link hover1">
          Menu
        </Link>
        <Link to="/auth" className="auth_link hover1">
          Sing in
        </Link>
        <Link to="/profile" className="profile_link ">
          <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
