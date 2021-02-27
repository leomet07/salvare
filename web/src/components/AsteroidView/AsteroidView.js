import React from "react";
import "./AsteroidView.css";
export default class AsteroidView extends React.Component {
	render() {
		console.log(this.props);
		console.log(this.props.close_approach_data[0].close_approach_date_full);
		return (
			<div className="col container_a col-sm-3">
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
							<button
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								type="button"
							>
								Learn More
							</button>
						</p>
						<h5>
							Closest Approach date: &nbsp;
							{
								this.props.close_approach_data[0]
									.close_approach_date_full
							}
						</h5>
					</div>
				</div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-fullscreen">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLabel"
								>
									{this.props.name}
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div
								className="modal-body"
								style={{ color: "black" }}
							>
								<h2>{this.props.name}</h2>
								<img src={this.props.img}></img>
								<p>
									Relative Velocity: &nbsp;
									{
										this.props.close_approach_data[0]
											.relative_velocity.miles_per_hour
									}
									&nbsp;mph
								</p>
								<p>
									Relative Velocity: &nbsp;
									{
										this.props.close_approach_data[0]
											.relative_velocity
											.kilometers_per_hour
									}
									&nbsp;kph
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-primary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
