import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";

import { Location } from "./Location";
import "./Location.css";
import { Link, useHistory } from "react-router-dom";

export const LocationList = () => {
  const { getLocations, locations } = useContext(LocationContext);

  const history = useHistory();
  // Initialization effect hook -> Go get location data
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <h1>locations</h1>

      <button onClick={() => history.push("/locations/create")}>
        Add location
      </button>

      <div className="locations">
        {locations.map((location) => (
          <div className="location">
            <Link to={`/locations/detail/${location.id}`}>{location.name}</Link>
            <div>{location.employees.length} employees</div>
            <div>{location.animals.length} animals</div>
          </div>
        ))}
      </div>
    </>
  );
};
