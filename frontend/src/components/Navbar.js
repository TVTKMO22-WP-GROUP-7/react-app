import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>USERNAME HERE?</h3>
			<nav ref={navRef}>
				<a href="/defaultview">Custom Page</a>
				<a href="/changepassword">Change Password</a>
				<a href="/">Logout</a>
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