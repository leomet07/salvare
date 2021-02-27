import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">
							<About />
						</Route>

						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
