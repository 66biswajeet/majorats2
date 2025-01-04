// /backend/config/firebaseConfig.js

const admin = require("firebase-admin");
require("dotenv").config();

// const serviceAccount = require("../serviceAccountKey.json");

let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} catch (error) {
  console.error("Error parsing Firebase service account:", error);
  process.exit(1);
}

console.log(typeof serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://resumate-mp-default-rtdb.firebaseio.com/",
});

const db = admin.firestore();

db.settings({
  ignoreUndefinedProperties: true, // Enables ignoring undefined properties
});
module.exports = { db };
