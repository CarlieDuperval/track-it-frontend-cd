import React from "react";
import Button from "@mui/material/Button";

const Hero = () => {
  const handleLogin = () => {};
  return (
    <div>
      <div className="textBlock">
        <div className="allText">
          TrackIT is keep tracking sales for better decision Making.
        </div>
        <div className="textCell">
          <p className="textHeader">Sales need to be track, Let's TrackIT</p>
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
