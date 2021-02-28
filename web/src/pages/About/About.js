import "./About.css";
export default function About() {
	return (
		<div className="About">
			<div className="header" style={{ color: "white" }}>
				<h2>About Salvare</h2>
				<h4>
					Salvare is a web app dedicated to warning users about nearby
					asteroids.
				</h4>
				<h4>
					Be prepared for a possible impact with all of this data!
				</h4>
				<h4>
					This information comes from NASA's databases of objects that
					orbit close to Earth.
				</h4>
				<h4>
					There are a lot of objects revolving around us at all times,
				</h4>
				<h4>
					but Salvare reports the ones we should be worried about!
				</h4>

				<h4></h4>
				<h4>
					Choose to observe data from our selection of dangerously
					close asteroids.
				</h4>
				<h4>
					Salvare includes a picture of the selected asteroid's orbit,
					along
				</h4>
				<h4>
					with other stats such as distance, velocity, and flight
					path.
				</h4>
				<h4></h4>
				<h4>
					Credit to NASA for NeoWs API:
					<a href="https://api.nasa.gov" target="_blank">
						api.nasa.gov
					</a>
				</h4>

				<h4>
					Generated graphs from
					<a href="https://ssd.jpl.nasa.gov/sbdb.cgi" target="_blank">
						JPL
					</a>
				</h4>
				<h4>
					Website hosted on firebase (wrapper of google cloud
					platform), and generated graphs are saved to a google cloud
					storage bucket.
				</h4>
			</div>
		</div>
	);
}
