const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// enable files upload
app.use(
	fileUpload({
		createParentPath: true,
	})
);

//add other middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static("uploads"));
app.get("/", (req, res) => {
	res.json("Watch out for asteroids");
});
app.post("/post", async (req, res) => {
	try {
		if (!req.files) {
			res.send({
				status: false,
				message: "No file uploaded",
			});
		} else {
			//Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
			let file = req.files.file;

			//Use the mv() method to place the file in upload directory (i.e. "uploads")
			file.mv("./uploads/" + file.name);

			//send response
			res.send({
				status: true,
				message: "File is uploaded",
				data: {
					name: file.name,
					mimetype: file.mimetype,
					size: file.size,
				},
			});
		}
	} catch (err) {
		res.status(500).send(err);
	}
});
app.listen(port, () => console.log("Listening on port " + port));
