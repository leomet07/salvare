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
			// console.log(occurence);

			occurences_ui.push(
				<AsteroidView
					close_approach_data={occurence.close_approach_data}
					key={occurence.neo_reference_id}
					id={occurence.neo_reference_id}
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
				<div class="home_main_container">
					<div id="all_occurences_container" className="row">
						{occurences_ui.length > 0 ? (
							occurences_ui
						) : (
							<div>
								{/* <h2>Loading...</h2> */}
								<img
									src="/loading.gif"
									class="loading_gif"
									alt="Loading..."
								/>

								<h3>
									If asteroid occurences dont appear within 10
									seconds, reload the page.
								</h3>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
