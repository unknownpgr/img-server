const multer = require("multer");
const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = 80;

const upload = multer({ dest: path.join(__dirname, "public/imgs") });
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Show image. default page.
app.get("/", (req, res) => res.redirect("/index.html"));

// Upload image
app.post("/upload", upload.single("img"), (req, res) => {
  console.log(new Date());
  console.log(req.file);
  console.log('');
  res.status(200).send({ filename: path.join("imgs", req.file.filename) });
});

// Show image lists
app.get("/list", (req, res) => {
  res.send(`
<html>
<head>
  <style>
    img{
      width:640px;
    }

    .center{
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .item{
      margin-top:2rem;
    }
  </style>
</head>
<body>
${fs.readdirSync(path.join(__dirname, "public", "imgs")).map(imgName => `
<div class="item center">
  <div class="center">
    <a href="/?img=imgs/${imgName}">
      ${imgName}
    </a>
  </div>
  <div class="center">
    <img src="imgs/${imgName}">
  </div>
</div>
  `).join('')}
</body>
</html>
  `.replace(/(\r|\n)/g, '')
  );
});

app.listen(PORT, () => console.log("Server started at port " + PORT));
