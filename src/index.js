import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"

import "./styles.css"
import App from "./components/app/App"

const root = document.getElementById("root")
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	root,
)
