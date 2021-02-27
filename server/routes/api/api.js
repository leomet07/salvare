const router = require("express").Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");
const bucket = require("../../bucket");

router.use("/db/", require("./db/db"));

router.post("/upload_ss", async (req, res) => {
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
			const temp_path = "../../uploads/" + temp_filename;
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
module.exports = router;
