const StationModel = require("../models/stationModel");
const stations = require("../db/stations");

function Insert() {
  const stationsArr = Object.keys(stations);
  for (let i = 0; i < stationsArr.length; i++) {
    const key = stationsArr[i];
    const station = stations[key];
    const newStations = new StationModel({
      stationId: +key,
      airplaneId: station.airplaneId,
      stationName: station.stationName,
    });
    newStations
      .save()
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
module.exports = { Insert };
