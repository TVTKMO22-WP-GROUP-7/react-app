import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();
	const navigate = useNavigate()
	const name = localStorage.getItem("token");

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	function logout() {
		localStorage.removeItem("token")
		navigate("/")
		window.location.reload(false)
	}

	return (
		<header>
			<h3>{name}</h3>
			<nav ref={navRef}>
				<a href="/defaultview">Custom Page</a>
				<a href="/changepassword">Change Password</a>
				<a href="/" onClick={logout}>Logout</a>
				<a href="/deleteaccount">Delete account</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;