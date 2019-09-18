import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.setState({
			redirectModifySchedule: false,
			redirectViewClass: false,
			classes: [
				{
					teacher: "Teacher 1",
					class: "Class 1",
					period: "1st",
					time: "Time 1",
					location: "Location 1"
				},
				{
					teacher: "Teacher 2",
					class: "Class 2",
					period: "2nd",
					time: "Time 2",
					location: "Location 2"
				}
			]
			// this.redirectModifySchedule=this.redirectModifySchedule.bind(this)
		});
	}

	handleRedirectViewClass() {
		this.setState({
			redirectViewClass: !this.state.redirectViewClass
		});
	}

	handleRedirectModifySchedule() {
		this.setState({
			redirectModifySchedule: !this.state.redirectModifySchedule
		});
	}

	render() {
		return (
			<div>
				<h1>home</h1>
				<Button variant="contained">
					<Link to="/edit" style={{ textDecoration: "none" }}>
						Edit Schedule
					</Link>
				</Button>
				<Button variant="contained">
					<Link to="/viewclass" style={{ textDecoration: "none" }}>
						View Class
					</Link>
				</Button>

				<Container maxWidth="md">
					<Paper>
						<Card style={{ marginBottom: "20px" }}>
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									Teacher
								</Typography>
								<Typography variant="h5" component="h2">
									Class
								</Typography>
								<Typography color="textSecondary">Period, Time</Typography>
								<Typography variant="body2" component="p">
									Location
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">
									{" "}
									<Link to="/viewclass" style={{ textDecoration: "none" }}>
										View Class
									</Link>
								</Button>
							</CardActions>
						</Card>
					</Paper>
					<Paper>
						<Card style={{ marginBottom: "20px" }}>
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									Teacher
								</Typography>
								<Typography variant="h5" component="h2">
									Class
								</Typography>
								<Typography color="textSecondary">Period, Time</Typography>
								<Typography variant="body2" component="p">
									Location
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">
									{" "}
									<Link to="/viewclass" style={{ textDecoration: "none" }}>
										View Class
									</Link>
								</Button>
							</CardActions>
						</Card>
					</Paper>
				</Container>
			</div>
		);
	}
}
