import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51181.78644006659!2d52.61378774650187!3d36.701862269086604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8f81c6f2554bfb%3A0x1d77f2bb333c2f3a!2sBabolsar%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1723036060887!5m2!1sen!2snl"
        width="100%"
        height="450"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;
