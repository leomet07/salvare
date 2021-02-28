import "./Home.css";
import React from "react";
import AsteroidView from "../../components/AsteroidView/AsteroidView.js";
export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			occurences: [],
		};
	}
	async componentDidMount() {
		const response = await fetch(
			"https://salvare-backend.herokuapp.com/api/v1/db/get_occurrences",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const json = await response.json();
		console.log(json);
		this.setState({ occurences: json });
	}

	render() {
		const occurences_ui = [];
		for (let occurence of this.state.occurences) {
			console.log(occurence);

			occurences_ui.push(
				<AsteroidView
					close_approach_data={occurence.close_approach_data}
					key={occurence.neo_reference_id}
					name={occurence.name}
					img={occurence.graph_ss_url}
					estimated_diameter={occurence.estimated_diameter}
					desc="asteroid 4"
					className="asteroid_displayer"
				/>
			);
		}
		return (
			<div>
				<div
					style={{
						paddingTop: "50px",
						paddingLeft: "40px",
						paddingRight: "40px",
					}}
				>
					<div id="all_occurences_container" className="row">
						{occurences_ui}
					</div>
				</div>
			</div>
		);
	}
}
