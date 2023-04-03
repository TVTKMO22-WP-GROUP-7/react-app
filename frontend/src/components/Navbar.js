import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();
	const navigate = useNavigate()
	const name = localStorage.getItem("username");
	const location = useLocation();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	function logout() {
		localStorage.removeItem("token")
		localStorage.removeItem("username")
		navigate("/")
		window.location.reload(false)
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

	return (
		<header>
			<h3>Current User: {name}</h3>
			<nav ref={navRef}>
				<a href={changeDefaultView()}>Change View</a>
				<a href={changeCustomDefaultView()}>
					{location.pathname === "/custompage" ? "Default Page" : "Custom Page"}
				</a>
				<a href="/changepassword">Change Password</a>
				<a href="/" onClick={logout}>Logout</a>
				<a href="/deleteaccount">Delete account</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;