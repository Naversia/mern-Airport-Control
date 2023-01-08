const express = require("express");
const airplaneController = require("../controllers/airplaneController");
const airplaneRoutes = express.Router();

// http://localhost:5000/simulator/run
airplaneRoutes.get("/run", async (req, res) => {
  airplanes = await airplaneController.moveAllAirplanes();
  res.send(airplanes);
});
// http://localhost:5000/simulator/init
airplaneRoutes.get("/init", async (req, res) => {
  const numOfAirplanes = req.query.numOfAirplanes;
  //console.log(req.query, numOfAirplanes);
  const airplanesForInit = await airplaneController.initAirplanes(
    numOfAirplanes
  );
  res.send(airplanesForInit);
});

// http://localhost:5000/simulator/station
airplaneRoutes.get("/stations", (req, res) => {
  res.send(airplaneController.stations);
});

// http://localhost:5000/simulator/airplanes
airplaneRoutes.get("/airplanes", async (req, res) => {
  const airplanes = await airplaneController.getAllAirPlanesDB();
  res.send(airplanes);
});

module.exports = airplaneRoutes;
