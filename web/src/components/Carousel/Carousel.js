export default function Carousel() {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active" data-bs-interval="7000">
					<img
						src="https://apod.nasa.gov/apod/image/2102/PIA24264-1900.jpg"
						className="d-block w-100"
					/>
					<div className="carousel-caption d-none d-md-block">
						<p style={{ color: "#808080" }}>February 26, 2021</p>
					</div>
				</div>
				<div className="carousel-item" data-bs-interval="7000">
					<img
						src="https://thegu5.github.io/image-files/wispr_venus_image.jpg"
						className="d-block w-100"
					/>
					<div className="carousel-caption d-none d-md-block">
						<p style={{ color: "#808080" }}>February 25, 2021</p>
					</div>
				</div>
				<div className="carousel-item" data-bs-interval="7000">
					<img
						src="https://thegu5.github.io/image-files/spiral_galaxy.jpg"
						className="d-block w-100"
					/>
					<div className="carousel-caption d-none d-md-block">
						<p style={{ color: "#808080" }}>February 24, 2021</p>
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
	);
}
