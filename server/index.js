const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const db_str = process.env.DB_CONNECT;
console.log(db_str);
mongoose.connect(
	db_str,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	() => {
		console.log("connected to db!");
	}
);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	fileUpload({
		createParentPath: true,
	})
);

app.use(express.static("uploads"));
app.use("/api/v1/", require("./routes/api/api"));

app.get("/", (req, res) => {
	res.json("Watch out for asteroids");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port " + port));
