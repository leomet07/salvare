const admin = require("firebase-admin");

const serviceAccount = require("./admin.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "salvare-fullstack.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = bucket;
