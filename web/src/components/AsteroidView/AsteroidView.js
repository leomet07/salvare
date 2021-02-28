import React from "react";
import "./AsteroidView.css";
export default class AsteroidView extends React.Component {
	render() {
		console.log(this.props);

		let close_approach_date_full = this.props.close_approach_data[0]
			.close_approach_date_full;
		let year = close_approach_date_full.slice(0, 4);
		let month = close_approach_date_full.slice(5, 8);
		let date = close_approach_date_full.slice(9, 11);
		let time = close_approach_date_full.slice(
			12,
			close_approach_date_full.length
		);
		console.log(close_approach_date_full);
		close_approach_date_full =
			month + " " + date + ", " + year + " at " + time;

		console.log(this.props.img);
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
						<h5>
							Closest Approach date: &nbsp;
							{close_approach_date_full}
						</h5>
						<p className="card-text" style={{ paddingTop: "10px" }}>
							<button
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target={"#" + "neo" + this.props.id}
								type="button"
							>
								Learn More
							</button>
						</p>
					</div>
				</div>

				<div
					className="modal fade"
					id={"neo" + this.props.id}
					tabIndex="-1"
					aria-labelledby={this.props.id + "Label"}
					aria-hidden="true"
				>
					<div className="modal-dialog modal-fullscreen">
						<div
							className="modal-content"
							style={{ "text-align": "center" }}
						>
							<div className="modal-header">
								<h5
									className="modal-title"
									id={"neo" + this.props.id + "Label"}
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
								<img alt="big_graph" src={this.props.img}></img>
								<h4>
									Closest Approach date: &nbsp;
									{close_approach_date_full}
								</h4>
								<h4>
									Relative Velocity: &nbsp;
									{
										this.props.close_approach_data[0]
											.relative_velocity.miles_per_hour
									}
									&nbsp;mph/&nbsp;
									{
										this.props.close_approach_data[0]
											.relative_velocity
											.kilometers_per_hour
									}
									&nbsp;kph
								</h4>
								<h4>
									Miss Distance: &nbsp;
									{
										this.props.close_approach_data[0]
											.miss_distance.miles
									}
									&nbsp;miles/&nbsp;
									{
										this.props.close_approach_data[0]
											.miss_distance.kilometers
									}
									&nbsp;kilometers
								</h4>
								<h4>
									Estimated Diameter: &nbsp;
									{
										this.props.estimated_diameter.miles
											.estimated_diameter_min
									}
									&nbsp;-&nbsp;
									{
										this.props.estimated_diameter.miles
											.estimated_diameter_max
									}
									&nbsp;kilometers/&nbsp;
									{
										this.props.estimated_diameter.kilometers
											.estimated_diameter_min
									}
									&nbsp;-&nbsp;
									{
										this.props.estimated_diameter.kilometers
											.estimated_diameter_max
									}
									&nbsp;miles
								</h4>
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
