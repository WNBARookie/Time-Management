import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import ModifySchedule from "./Components/ModifySchedule/ModifySchedule";
import ViewClass from "./Components/ViewClass/ViewClass";
export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/edit" component={ModifySchedule} />
					<Route path="/viewclass" component={ViewClass} />
				</div>
			</Router>
		);
	}
}
