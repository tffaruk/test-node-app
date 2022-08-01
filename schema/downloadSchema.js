const mongoose = require("mongoose");

const downloadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  download: {
    type: Number,
    required: false,
  },
});
module.exports = downloadSchema;
