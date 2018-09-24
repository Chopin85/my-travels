import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <h1>Destination: {destination}</h1>
        <h1>Country: {country}</h1>
        <img src={photo} alt={destination} className="img"/>
        <h1>Distance: {distance}</h1>
    </div>
);

export default Travel;