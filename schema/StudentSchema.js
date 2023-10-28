const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String },
    emailid: { type: String },
    pwd: { type: String },
  },
  {
    collection: "Students",
  }
);
module.exports = mongoose.model("Students", StudentSchema);
