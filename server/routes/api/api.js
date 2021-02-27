const router = require("express").Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");
const bucket = require("../../bucket");
const uploadDiskImage = async (file) => {
	const { name, buffer } = file;
	const fileHandle = bucket.file(name);
	const [fileExists] = await fileHandle.exists();
	if (fileExists === false) {
		return fileHandle.save(buffer);
	}
	return new Promise((resolve, reject) => resolve(name));
};
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
			const temp_filename = uuid() + "." + file.name.split(".").pop();

			const imageBuffer = Buffer.from(file.data);

			bucket.file(temp_filename).save(imageBuffer);
			const publicUrl = `https://storage.googleapis.com/${bucket.name}/${temp_filename}`;
			console.log(publicUrl);

			res.json({
				status: true,
				message: "File is uploaded",
				url: publicUrl,
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
});
module.exports = router;
