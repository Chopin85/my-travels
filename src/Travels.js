import React from "react";
import Travel from "./Travel";

const tableau = [
    {
        destination:"London",
        country:"England",
        photo:"https://cdn.pixabay.com/photo/2010/12/13/10/21/architecture-2715_1280.jpg",
        distance:"800Km"
    },
    {
        destination:"Roma",
        country:"Italy",
        photo:"https://www.focus.it/site_stored/imgs/0005/014/untitleddesign17.jpg",
        distance:"1500Km"
    },
    {
        destination:"Madrid",
        country:"Espagne",
        photo:"https://cdn.getyourguide.com/img/tour_img-440052-145.jpg",
        distance:"2000Km"
    },
    {
        destination:"Amsterdam",
        country:"Pays-Bas",
        photo:"https://www.liberopensiero.eu/wp-content/uploads/2017/06/Olanda-Amsterdam-storia.jpg",
        distance:"2000Km"
    },
    {
        destination:"Miami Beach",
        country:"Florida",
        photo:"https://red-dot-21.com/content/uploads/2017/10/miami-beach-designer-hotspots__header_miami.jpg",
        distance:"8000Km"
    }
];

const Travels = () => (
    <div>
      {tableau.map(name => (
          <Travel {...name}/>
      ))}
    </div>
  );

export default Travels;


