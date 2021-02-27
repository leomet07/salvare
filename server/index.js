const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const fs = require("fs");
require("dotenv").config();

var admin = require("firebase-admin");

var serviceAccount = require("./admin.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "salvare-fullstack.appspot.com",
});

var bucket = admin.storage().bucket();

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
			const temp_filename = uuid() + "." + file.name.split(".").pop();
			const temp_path = "./uploads/" + temp_filename;
			file.mv(temp_path);

			const data = await bucket.upload(temp_path);
			// console.log("uploaded: ", data);

			// await fs.promises.unlink(temp_path);
			const img_url =
				"https://storage.googleapis.com/salvare-fullstack.appspot.com/" +
				temp_filename;
			//send response
			res.send({
				status: true,
				message: "File is uploaded",
				url: img_url,
				data: {
					name: temp_filename,
					mimetype: file.mimetype,
					size: file.size,
				},
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
});
app.listen(port, () => console.log("Listening on port " + port));
