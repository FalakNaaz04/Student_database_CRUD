const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const StudentRoute = require("./Student_routes/StudentRoutes");

const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://falaknaaz:allahtalah@cluster0.flmelzw.mongodb.net/School"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("db connected");
});
db.on("error", (err) => {
  console.log("error in connecting to db", err);
});
app.use(express.json());
app.use(cors());
app.use("/Students", StudentRoute);

const port = 5500;
app.listen(port, () => {
  console.log("server started on " + port);
});
