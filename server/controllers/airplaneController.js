const AirplaneModel = require("../models/airplaneModel");
const AirplaneArray = require("../db/airplanes.json");

let numOfAirplanesInRun = 0;
let isMoving = false;
let count4AirplanesOnStations = 0;

const stations = {
  1: { airplaneId: null, location: [{ top: 11, left: 80 }] },
  2: { airplaneId: null, location: [{ top: 19, left: 75 }] },
  3: { airplaneId: null, location: [{ top: 28, left: 72 }] },
  4: { airplaneId: null, location: [{ top: 30, left: 35 }] },
  5: { airplaneId: null, location: [{ top: 42, left: 35 }] },
  6: {
    airplaneId: null,
    location: [
      { top: 51, left: 35 },
      { top: 51, left: 40 },
      { top: 68, left: 40 },
    ],
  },
  7: {
    airplaneId: null,
    location: [
      { top: 51, left: 35 },
      { top: 51, left: 54 },
      { top: 68, left: 54 },
    ],
  },
  8: {
    airplaneId: null,
    location: [
      { top: 51, left: 40 },
      { top: 51, left: 59 },
      { top: 42, left: 59 },
    ],
  },
  9: { airplaneId: null, location: [{ top: 30, left: 23 }] },
};

const is5StationsFull = () => {
  return count4AirplanesOnStations === 4;
};
// insert new airplanes to collection
function Insert() {
  for (let i = 0; i < AirplaneArray.airplanes.length; i++) {
    const airplane = AirplaneArray.airplanes[i];
    const newAirPlane = new AirplaneModel(airplane);
    newAirPlane
      .save()
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log(err.message);
      });
  }
}

const initAirplanes = async (numOfAirplanes) => {
  if (!numOfAirplanes) {
    numOfAirplanesInRun = 0;
  } else {
    numOfAirplanesInRun = numOfAirplanes;
  }

  const airplanesForInit = await getAllAirPlanesDB();
  for (let i = 0; i < airplanesForInit.length; i++) {
    airplanesForInit[i].station = 1;
    await airplanesForInit[i].save();
  }
  for (let i = 1; i < 10; i++) {
    stations[i].airplaneId = null;
  }
  return airplanesForInit;
};

const getAllAirPlanesDB = async () => {
  const staticAirplanes = await AirplaneModel.find();
  //return staticAirplanes.slice(0, 4);
  if (numOfAirplanesInRun == 0) {
    return staticAirplanes;
  } else {
    return staticAirplanes.slice(0, numOfAirplanesInRun);
  }
};

const moveAllAirplanes = async () => {
  const airplanesForMove = await getAllAirPlanesDB();
  if (isMoving === true) {
    return airplanesForMove;
  }
  isMoving = true;
  airplaneStations(airplanesForMove);
  for (let i = 0; i < airplanesForMove.length; i++) {
    await airplanesForMove[i].save();
  }
  isMoving = false;
  return airplanesForMove;
};

const airplaneStations = (airplanes) => {
  //airplanes.forEach(airplane => { });
  for (let i = 0; i < airplanes.length; i++) {
    //
    const airplane = airplanes[i];
    // if (airplane.airplaneId == 1003) {
    //   console.info(airplane.station);
    // }
    // if (airplane.isReady === true) {
    //console.log("handling ", airplane);
    if (airplane.station === 1 && stations[2].airplaneId === null) {
      moveAirplane(airplane, 2);
    } else if (airplane.station === 2 && stations[3].airplaneId === null) {
      moveAirplane(airplane, 3);
    } else if (
      airplane.station === 3 &&
      stations[4].airplaneId == null &&
      is5StationsFull() === false
    ) {
      console.log(
        "move to 4",
        airplane.airplaneId,
        stations[4].airplaneId,
        stations[5].airplaneId
      );
      moveAirplane(airplane, 4);
    } else if (airplane.station === 4) {
      if (airplane.passedLanding === true) {
        airplane.station = 9;
        stations[4].airplaneId = null;
      } else if (stations[5].airplaneId == null) {
        moveAirplane(airplane, 5);
      }
    } else if (airplane.station === 5) {
      if (stations[6].airplaneId == null) moveAirplane(airplane, 6);
      else if (stations[7].airplaneId == null) moveAirplane(airplane, 7);
    } else if (
      (airplane.station === 6 || airplane.station === 7) &&
      stations[8].airplaneId === null
    ) {
      moveAirplane(airplane, 8);
    } else if (airplane.station === 8 && stations[4].airplaneId === null) {
      // airplane.passedLanding = true;
      moveAirplane(airplane, 4);
    } else if (airplane.station === 9) {
      if (stations[1].airplaneId === null) {
        moveAirplane(airplane, 1);
      } else if (stations[2].airplaneId === null) {
        moveAirplane(airplane, 2);
      }
    }
    // else if (stations[1].airplaneId == null) moveAirplane(airplane, 1);
    //}
  }
};

const moveAirplane = (airplane, stationNumber) => {
  console.log("moveAirplane " + airplane.station + " to " + stationNumber);
  stations[airplane.station].airplaneId = null;
  airplane.station = stationNumber;
  stations[stationNumber].airplaneId = airplane.airplaneId;
  //airplane.isReady = false;

  if (stationNumber >= 4 && stationNumber <= 8) {
    count4AirplanesOnStations--;
  }
  if (stationNumber === 9) {
    count4AirplanesOnStations++;
  }
  if (stationNumber === 5) {
    airplane.passedLanding = true;
  } else if (stationNumber === 1 || stationNumber === 2) {
    airplane.passedLanding = false;
  }

  // if (stationNumber === 4) {
  //     airplane.passedLanding = true;
  //     moveAirplane(airplane, );
  //     else moveAirplane(airplane, 5);

  //   }

  // setTimeout(() => {
  //   airplane.isReady = true;
  // }, 100);
};

module.exports = {
  getAllAirPlanesDB,
  moveAllAirplanes,
  stations,
  initAirplanes,
};
