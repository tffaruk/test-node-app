const mongoose = require("mongoose");
const downloadSchema = require("../schema/downloadSchema");

const Download = new mongoose.model("Download", downloadSchema);
module.exports = Download;
