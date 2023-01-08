import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
//import { gql } from '@apollo/client/core';

function Table(props) {
  const [airplanes, setAirplanes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /*
  const { loading, error, data } = useQuery(gql`
    query {
      airplanes {
        airplaneId
        airplaneName
        station
        isReady
        passedLanding
      }
    }
  `);
  */

  const getAirplanesApi = () => {
    fetch("http://localhost:5000/simulator/airplanes")
      .then((response) => response.json())
      .then((airplanes) => {
        console.log(airplanes);
        setAirplanes(airplanes);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAirplanesApi();
  }, []);
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error :(</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Airplane ID</th>
          <th>Airplane Name</th>
          <th>Station</th>
          <th>Is Ready</th>
          <th>Passed Landing</th>
        </tr>
      </thead>
      <tbody>
        {props.airplanes.map((airplane) => (
          <tr key={airplane.airplaneId}>
            <td>{airplane.airplaneId}</td>
            <td>{airplane.airplaneName}</td>
            <td>{airplane.station}</td>
            <td>{airplane.isReady ? "true" : "false"}</td>
            <td>{airplane.passedLanding ? "true" : "false"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
