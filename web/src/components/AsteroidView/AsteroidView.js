import React from "react";
import "./AsteroidView.css";
export default class AsteroidView extends React.Component {
	render() {
		return (
			<div className="col container_a">
				<div className="card text-black bg-dark">
					<img
						src={this.props.img}
						className="card-img-top"
						alt="Asteroid Orbit"
					/>
					<div className="card-body">
						<h5 className="card-title occurence_name">
							{this.props.name}
						</h5>
						<p className="card-text" style={{ paddingTop: "10px" }}>
							<button className="btn btn-primary" type="button">
								Learn More
							</button>
						</p>
						<div className="collapse" id={this.props.name}>
							<div className="card card-body">
								{this.props.desc}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
