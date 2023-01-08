// const express = require("express");
// const recordRoutes = express.Router();

// const airplanes = [
//   {
//     airplaneId: 1001,
//     airplaneName: "el-al a",
//     station: 1,
//     isReady: true,
//     passedLanding: false,
//     image: "airplaneA.png",
//   },
//   {
//     airplaneId: 1002,
//     airplaneName: "African Airlines",
//     station: 2,
//     isReady: true,
//     passedLanding: false,
//     image: "airplaneB.png",
//   },
//   {
//     airplaneId: 1003,
//     airplaneName: "Thai Air",
//     station: 3,
//     isReady: true,
//     passedLanding: false,
//     image: "airplaneC.png",
//   },
//   // {
//   //   airplaneId: 1004,
//   //   airplaneName: "Aegean Airlines",
//   //   station: 3,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1005,
//   //   airplaneName: "Swiss Air",
//   //   station: 2,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1006,
//   //   airplaneName: "Jet Lines",
//   //   station: 1,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1007,
//   //   airplaneName: "Mozambique Airlines",
//   //   station: 2,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1008,
//   //   airplaneName: "Air China",
//   //   station: 1,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1009,
//   //   airplaneName: "React Air",
//   //   station: 2,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1010,
//   //   airplaneName: "Canada Air",
//   //   station: 1,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1011,
//   //   airplaneName: "Air Cairo",
//   //   station: 2,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1012,
//   //   airplaneName: "Airjet",
//   //   station: 1,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
//   // {
//   //   airplaneId: 1013,
//   //   airplaneName: "Luftansa",
//   //   station: 3,
//   //   isReady: true,
//   //   passedLanding: false,
//   // },
// ];

// const stations = {
//   1: { airplaneId: 1001, location: [{ top: 11, left: 80 }] },
//   2: { airplaneId: 1002, location: [{ top: 19, left: 75 }] },
//   3: { airplaneId: 1003, location: [{ top: 28, left: 72 }] },
//   4: { airplaneId: null, location: [{ top: 30, left: 35 }] },
//   5: { airplaneId: null, location: [{ top: 42, left: 35 }] },
//   6: {
//     airplaneId: null,
//     location: [
//       { top: 51, left: 35 },
//       { top: 51, left: 40 },
//       { top: 68, left: 40 },
//     ],
//   },
//   7: {
//     airplaneId: null,
//     location: [
//       { top: 51, left: 35 },
//       { top: 51, left: 54 },
//       { top: 68, left: 54 },
//     ],
//   },
//   8: {
//     airplaneId: null,
//     location: [
//       { top: 51, left: 40 },
//       { top: 51, left: 59 },
//       { top: 42, left: 59 },
//     ],
//   },
//   9: { airplaneId: null, location: [{ top: 30, left: 23 }] },
// };

// const airplaneStations = () => {
//   //airplanes.forEach(airplane => { });
//   for (const airplane of airplanes) {
//     // if (airplane.airplaneId == 1003) {
//     //   console.info(airplane.station);
//     // }

//     if (airplane.isReady === true) {
//       if (airplane.station === 1 && stations[2].airplaneId === null) {
//         moveAirplane(airplane, 2);
//       } else if (airplane.station === 2 && stations[3].airplaneId === null) {
//         moveAirplane(airplane, 3);
//       } else if (airplane.station === 3 && stations[4].airplaneId == null) {
//         moveAirplane(airplane, 4);
//       } else if (airplane.station === 4) {
//         if (airplane.passedLanding === true) {
//           airplane.station = 9;
//           stations[4].airplaneId = null;
//         } else if (stations[5].airplaneId == null) {
//           moveAirplane(airplane, 5);
//         }
//       } else if (airplane.station === 5) {
//         if (stations[6].airplaneId == null) moveAirplane(airplane, 6);
//         else if (stations[7].airplaneId == null) moveAirplane(airplane, 7);
//       } else if (
//         (airplane.station === 6 || airplane.station === 7) &&
//         stations[8].airplaneId === null
//       ) {
//         moveAirplane(airplane, 8);
//       } else if (
//         airplane.station === 8 &&
//         stations[4].airplaneId === null &&
//         stations[5].airplaneId === null
//       ) {
//         // airplane.passedLanding = true;
//         moveAirplane(airplane, 4);
//       } else if (airplane.station === 9) {
//         if (stations[1].airplaneId === null) {
//           moveAirplane(airplane, 1);
//         } else if (stations[2].airplaneId === null) {
//           moveAirplane(airplane, 2);
//         }
//       }
//       // else if (stations[1].airplaneId == null) moveAirplane(airplane, 1);
//     }
//   }
// };

// const moveAirplane = (airplane, stationNumber) => {
//   stations[airplane.station].airplaneId = null;
//   airplane.station = stationNumber;
//   stations[stationNumber].airplaneId = airplane.airplaneId;
//   airplane.isReady = false;

//   if (stationNumber === 5) {
//     airplane.passedLanding = true;
//   } else if (stationNumber === 1 || stationNumber === 2) {
//     airplane.passedLanding = false;
//   }

//   setTimeout(() => {
//     airplane.isReady = true;
//   }, 100);
// };

// // http://localhost:5000/simulator/run
// recordRoutes.get("/run", (req, res) => {
//   airplaneStations();
//   res.send("run simuator");
// });

// // http://localhost:5000/simulator/station
// recordRoutes.get("/stations", (req, res) => {
//   res.send(stations);
// });

// // http://localhost:5000/simulator/airplanes
// recordRoutes.get("/airplanes", (req, res) => {
//   res.send(airplanes);
// });

// module.exports = recordRoutes;
