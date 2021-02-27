import "./Home.css";
export default function Home() {
	return (
		<div>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div
						className="carousel-item active"
						data-bs-interval="7000"
					>
						<img
							src="https://apod.nasa.gov/apod/image/2102/PIA24264-1900.jpg"
							className="d-block w-100"
							alt="Astronomy Picture Of the Day"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p style={{ color: "#808080" }}>
								February 26, 2021
							</p>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="7000">
						<img
							src="https://thegu5.github.io/image-files/wispr_venus_image.jpg"
							className="d-block w-100"
							alt="Astronomy Picture of the Day"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p style={{ color: "#808080" }}>
								February 25, 2021
							</p>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="7000">
						<img
							src="https://thegu5.github.io/image-files/spiral_galaxy.jpg"
							className="d-block w-100"
							alt="Astronomy Picture of the Day"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p style={{ color: "#808080" }}>
								February 24, 2021
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div style={{padding:"75px"}}>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card text-white bg-dark">
							<img
								src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
								className="card-img-top"
								alt="Asteroid Orbit"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card text-white bg-dark">
							<img
								src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
								className="card-img-top"
								alt="Asteroid Orbit"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card text-white bg-dark">
							<img
								src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
								className="card-img-top"
								alt="Asteroid Orbit"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
