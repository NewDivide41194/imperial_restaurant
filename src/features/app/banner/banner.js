import React from "react";
import NavBar from "../navBar";
import BannerBg from '../../../assets/images/backgrounds/1.jpg'
const Banner = (BannerImg) => {
  const headerStyle = { height: "500px",backgroundImage:`url(${BannerBg})`,backgroundRepeat:'no-repeat'};
  return (
    <div style={headerStyle}>
      <NavBar />
      
    </div>
  );
};

export default Banner;
