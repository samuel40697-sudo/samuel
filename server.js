const express = require("express");
const multer = require("multer");
const cors = require("cors");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
// IMPORTANT: You must place your 'serviceAccountKey.json' file in this directory.
// Download it from Firebase Console -> Project Settings -> Service Accounts
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
app.use(cors());

/* Storage location */

const storage = multer.diskStorage({
 destination: function(req,file,cb){
  cb(null,"uploads/")
 },
 filename: function(req,file,cb){
  cb(null, Date.now()+"-"+file.originalname)
 }
})

const upload = multer({storage:storage})

/* Upload API */

app.post("/upload", upload.single("file"), async (req,res)=>{
 console.log(req.file)

 try {
  // Save file metadata to Firestore
  await db.collection("server_uploads").add({
   originalName: req.file.originalname,
   filename: req.file.filename,
   path: req.file.path,
   size: req.file.size,
   uploadedAt: admin.firestore.FieldValue.serverTimestamp()
  });
  res.send("Upload successful and saved to database");
 } catch (error) {
  console.error("Error saving to database:", error);
  res.status(500).send("Error saving to database");
 }
})

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})