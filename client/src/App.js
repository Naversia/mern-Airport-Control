import React, { useState, useEffect } from "react";
import Table from "./components/table";
// We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar";
import CenterImg from "./components/centerImg";
import Move from "./components/move";
// import { initAirplanes } from "../../server/controllers/airplaneController";

const App = () => {
  const [airplanes, setAirplanes] = useState([]);
  const stations = {
    1: { airplaneId: null, location: [{ top: 11, left: 80 }] },
    2: { airplaneId: null, location: [{ top: 19, left: 75 }] },
    3: { airplaneId: null, location: [{ top: 28, left: 72 }] },
    4: { airplaneId: null, location: [{ top: 30, left: 35 }] },
    5: { airplaneId: null, location: [{ top: 42, left: 35 }] },
    6: {
      airplaneId: null,
      location: [
        // { top: 51, left: 35 },
        // { top: 51, left: 40 },
        { top: 68, left: 40 },
      ],
    },
    7: {
      airplaneId: null,
      location: [
        // { top: 51, left: 35 },
        // { top: 51, left: 54 },
        { top: 68, left: 54 },
      ],
    },
    8: {
      airplaneId: null,
      location: [
        // { top: 51, left: 40 },
        // { top: 51, left: 59 },
        { top: 42, left: 59 },
      ],
    },
    9: { airplaneId: null, location: [{ top: 30, left: 23 }] },
    10: { airplaneId: null, location: [{ top: 15, left: 50 }] },
  };

  const moveAirplanesApi = () => {
    fetch("http://localhost:5000/simulator/run")
      .then((response) => response.json())
      .then((airplanes) => {
        setAirplanes(airplanes);
      });
  };
  const getAirplanesApi = () => {
    fetch("http://localhost:5000/simulator/airplanes")
      .then((response) => response.json())
      .then((airplanes) => {
        console.log(airplanes);
        setAirplanes(airplanes);
      });
  };

  useEffect(() => {
    //getAirplanesApi();
    setInterval(() => {
      moveAirplanesApi();
    }, 5000);
  }, []);

  const getStation = (stationId) => {
    return stations[stationId];
  };

  return (
    <div className="mainApp">
      <div>
        <Navbar />
        <button onClick={moveAirplanesApi}>MOVE AIRPLANES</button>
        <CenterImg />

        {airplanes.map((airplane) => (
          <Move
            key={airplane.airplaneId}
            getStation={getStation}
            airplane={airplane}
          />
        ))}
        <Table airplanes={airplanes} />
        {/* <button onClick={initAirplanes}>Init AIRPLANES</button> */}
      </div>
    </div>
  );
};

export default App;
