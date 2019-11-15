import React from "react";
import NavBar from "../navBar";

const Banner = (BannerImg) => {
  const headerStyle = { height: "500px",background:"red"};
  return (
    <div style={headerStyle}>
      <NavBar />
      
    </div>
  );
};

export default Banner;
