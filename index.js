const multer = require("multer");
const express = require("express");
const path = require("path");

const upload = multer({ dest: path.join(__dirname, "public/imgs") });
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/index.html"));
app.post("/upload", upload.single("img"), (req, res) => {
  console.log(new Date());
  console.log(req.file);
  cosnole.log('');
  res.status(200).send({ filename: path.join("imgs", req.file.filename) });
});

app.listen(1502, () => console.log("Server started"));
