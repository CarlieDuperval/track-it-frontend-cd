import React from "react";
import Button from "@mui/material/Button";
import "../styles/HomePage.css";

const HomePage = () => {
  //const handleLogin = (e) => {};
  return (
    <div>
      <div className="textBlock">
        <h1 className="all-text">Welcome To Track IT</h1>
        <Button className="button" href="/login">
          Log In
        </Button>
        <div className="welcome">
          <p className="hero-text">
            Sales need to be track for better decision Making. <br />
            This App allows decision makers query quick report their monthly
            sales. <br /> Let's TrackIT
          </p>
        </div>
      </div>
    </div>
  );
  //document.getElementById("main").scrollIntoView({ behavior: "smooth" });
};
export default HomePage;
