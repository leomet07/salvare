import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container-fluid">
							<Link className="navbar-brand" to="/">
								Salvare
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link
											aria-current="page"
											className="nav-link"
											to="/"
										>
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/about">
											About
										</Link>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											target="_blank"
											href="https://github.com/leomet07/salvare"
										>
											GitHub
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">
							<About />
						</Route>

						<Route path="/">
							<Home />
						</Route>

						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}
