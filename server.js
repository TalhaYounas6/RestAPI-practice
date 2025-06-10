require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.Database_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(`There is an error ${error}`);
});
db.once("open", () => {
  console.log("Database Connected");
});

const subscriber = require("./routes/subscriberRoute");
app.use("/subscriberRoute", subscriber);
