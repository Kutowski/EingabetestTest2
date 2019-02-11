import React from "react"

import { NavLink } from "react-router-dom"

const styles = {
	navbar: {
		display: "flex",
		flexDirection: "row",
		background: "moccasin",
		width: "100%",
		height: "3rem",
		alignItems: "center",
		justifyContent: "space-around",
	},
}

const Navbar = () => {
	return (
		<div style={styles.navbar}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/dashboard">Dashboard</NavLink>
			<NavLink to="/datenschutz">Datenschutz</NavLink>
			<NavLink to="/impressum">Impressum</NavLink>
			<NavLink to="/about">About</NavLink>
		</div>
	)
}

export default Navbar
