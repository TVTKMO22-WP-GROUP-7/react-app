import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import NotLoggedNavbar from "./NotLoggedNavbar";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const name = localStorage.getItem("username");
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload(false);
  }

  function changeDefaultView() {
    if (location.pathname === "/defaultview2") {
      return "/";
    } else {
      return "/defaultview2";
    }
  }

  function changeCustomDefaultView() {
    if (location.pathname === "/custompage") {
      return "/";
    } else {
      return "/custompage";
    }
  }

  // Conditionally render the navbar based on whether the user is logged in or not
  if (name && localStorage.getItem("token")) {
    return (
      <header>
        <h3>Current User: {name}</h3>
        <nav ref={navRef}>
          {location.pathname === "/custompage" ? (null) : (
            <a href={changeDefaultView()}>Change View</a>
          )}
          <a href={changeCustomDefaultView()}>
            {location.pathname === "/custompage" ? "Default Page" : "Custom Page"}
          </a>
          <a href="/customviews">Custom views</a>
          <a href="/changepassword">Change Password</a>
          <a href="/deleteaccount">Delete account</a>
          <a href="/" onClick={logout}>Logout</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  } else {
    return (
      <NotLoggedNavbar></NotLoggedNavbar>
    );
  }
}

export default Navbar;