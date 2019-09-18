import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class ViewClass extends Component {
	render() {
		return (
			<div>
				<h1>view class</h1>{" "}
				<Button variant="contained">
					<Link to="/" style={{ textDecoration: "none" }}>
						Home
					</Link>
				</Button>
			</div>
		);
	}
}
