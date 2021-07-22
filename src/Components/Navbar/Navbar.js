import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import classname from "classnames";
import App from "../../App";

import { Menu } from "@material-ui/icons";


const Navbar = () => {
  const dropDown = (event) => {
   
   toggle();

  };
function toggle(){
  console.log('saf');
  return (
    <div className={style.drop}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/customer">Customer</Link>
      <Link to="/edit">Edit</Link>
    </div>
  );
}

  return (
    <nav className={style.navbar}>
      <h1>Hotel Management System</h1>
      <ul>
        <div onClick={dropDown} className={style.burgerMenu}>
          <Menu></Menu>
        </div>


        <div className={style.bar}>
          <Link
            to="/"
            className={location.pathname === "/" ? style.active : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? style.active : ""}
          >
            About
          </Link>
          <Link
            to="/customer"
            className={location.pathname === "/customer" ? style.active : ""}
          >
            Customer
          </Link>
          <Link
            to="/edit"
            className={location.pathname === "/edit" ? style.active : ""}
          >
            Edit
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
