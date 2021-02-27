const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.admin_key_file);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "salvare-fullstack.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = bucket;
