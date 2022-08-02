const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const downloadHandler = require("./routerHandler/downloadHandler");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.set("view engine", "ejs");
const port = 5001;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection"))
  .catch((err) => console.log(err));
// add handler
app.use("/download", downloadHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT || port);
