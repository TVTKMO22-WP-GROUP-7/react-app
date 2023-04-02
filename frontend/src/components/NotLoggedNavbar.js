import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function NotLoggedNavbar() {
	const navRef = useRef();
	const navigate = useNavigate()
	const location = useLocation();

	const showNotLoggedNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	function changeView() {
		if (location.pathname === "/defaultview2") {
			return "/";
		} else {
			return "/defaultview2";
		}
	}

	return (
		<header>
			<h3>Not Logged In</h3>
			<nav ref={navRef}>
				<a href={changeView()}>Change View</a>
				{/* {location.pathname === "/" ? "Default View" : "Default View2"} */}

				<a href="/login"> LogIn</a>
				<button className="nav-btn nav-close-btn" onClick={showNotLoggedNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn" onClick={showNotLoggedNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NotLoggedNavbar;