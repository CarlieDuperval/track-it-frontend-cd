import React from "react";
import Button from "@mui/material/Button";

const Hero = () => {
  const handleLogin = () => {};
  return (
    <div>
      <div className="textBlock">
        <div className="allText">Welcome To TrackIT</div>
        <div className="textCell">
          <p className="textHeader">
            Sales need to be track for better decision Making. <br />
            This App allows decision makers query quick report their monthly
            sales. <br /> Let's TrackIT
          </p>
          <Button className="button" onClick={handleLogin}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
  //document.getElementById("main").scrollIntoView({ behavior: "smooth" });
};
export default Hero;
