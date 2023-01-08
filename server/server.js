const express = require("express");
const colors = require("colors");
//const runSimulator = require("./runSimulatorController");
const airplanesRoute = require("./routes/airplaneRoutes");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./config/db");
//const airplaneController = require("./controllers/airplaneController");
//const stationController = require("./controllers/stationController");
//mongoose
// const mongoose = require("mongoose");
// mongoose.connect()
connectDB().then((conn) => {
  //airplaneController.Insert();
  // stationController.Insert();
});
//
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use("/simulator/airplanes", require("./routes/recordRoutes"));
app.use("/simulator", airplanesRoute);

app.use(errorHandler);
// get driver connection
// const dbo = require("./db/conn");

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  // perform a database connection when server starts
  /*dbo.connectToServer().then((conn, err) => {
    if (err) {
      console.log(err.error);
    } else {
      console.log("connected to db");
    }
  });
  */
  //dbo.connectToServer(function (err) {
  //if (err) console.error(err);
  //});
});
