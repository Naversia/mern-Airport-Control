import React, { useEffect, useState } from "react";
import "./move.css";
// import { Grid, Row, Col } from "react-flexbox-grid";

function Move(props) {
  const [airplaneLocation, setAirplaneLocation] = useState({
    top: 8,
    left: 85,
  });
  const [currentStation, setCurrentStation] = useState([{ top: 8, left: 85 }]);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  /*
  function move(element) {
    var elId = element.id;
    if (!elId) {
      throw "Cannot move an element without an ID!";
    }
    var elStyleSheet = document.getElementById(element.id + "-movement");
    if (!elStyleSheet) {
      elStyleSheet = document.createElement("style");
      elStyleSheet.id = element.id + "-movement";
      document.head.appendChild(elStyleSheet);
    }
    setLocation({ left: location.left - 5, top: location.top + 5 });
  }
*/
  const moveAirPlane = () => {
    //setLocation({left: location.left-5, top:location.top})
    const tempLocation = { ...airplaneLocation };
    const targetLocation = currentStation[currentStationIndex];
    //if (!currentStation[currentStationIndex]) return;
    if (targetLocation.left < airplaneLocation.left) {
      tempLocation.left -= 1;
    } else if (targetLocation.left > airplaneLocation.left) {
      tempLocation.left += 1;
    }
    if (targetLocation.top < airplaneLocation.top) {
      tempLocation.top -= 1;
    } else if (targetLocation.top > airplaneLocation.top) {
      tempLocation.top += 1;
    }
    if (
      targetLocation.top === airplaneLocation.top &&
      targetLocation.left === airplaneLocation.left
    ) {
      if (currentStationIndex < currentStation.length - 1) {
        setCurrentStationIndex(currentStationIndex + 1);
      } else {
        window.clearTimeout(intervalId);
        return;
      }
    }
    //console.log("moving to ", tempLocation, currentStation.location);
    setAirplaneLocation({ ...tempLocation });
  };
  useEffect(() => {
    const stationId = props.airplane.station;
    const currentStation = props.getStation(stationId);
    const targetLocation =
      currentStation.location[currentStation.location.length - 1];
    console.log(
      props.airplane.airplaneName,
      stationId,
      airplaneLocation,
      targetLocation
    );
    console.log(
      targetLocation.top !== airplaneLocation.top ||
        targetLocation.left !== airplaneLocation.left
    );
    if (
      targetLocation.top !== airplaneLocation.top ||
      targetLocation.left !== airplaneLocation.left
    ) {
      setCurrentStation(currentStation.location);
      setCurrentStationIndex(0);
    }

    //setIntervalId(intervalId);

    //var littleBox = document.getElementById("airplane-size");
    //littleBox.style.left = location.left + "%";
    //littleBox.style.top = location.top + "%";
    //littleBox.onclick = function () {
    // move(this);
    // setLocation();
    //};
  }, [props.airplane]);

  useEffect(() => {
    const intervalId = window.setTimeout(moveAirPlane, 90);
    setIntervalId(intervalId);
  }, [airplaneLocation, currentStation]);

  return (
    <div>
      {/* <div id="airplane-size"></div> */}
      <img
        // className="airplane-size"
        className="airplane-size"
        //src={"img/" + props.airplane.image}
        src={`img/${props.airplane.image}`}
        alt={props.airplane.airplaneName}
        style={{
          left: airplaneLocation.left + "vw",
          top: airplaneLocation.top + "vh",
        }}
        title={props.airplane.airplaneName}
      />
    </div>
  );
}
export default Move;
