import React from "react";
import Button from "@mui/material/Button";
import "../styles/HomePage.css";
// import graph from "../../assets/graph.png";

const HomePage = () => {
  //const handleLogin = (e) => {};
  return (
    <div>
      {/* <img className="back-img" src="logoblackwhite.png" alt="logo track it" /> */}
      <div>
        <Button className="button" href="/login">
          Log In
        </Button>
      </div>
      <div>
        <h1 className="all-text">Track IT</h1>
        {/* <img src="graph.png" alt="chart of sales" /> */}
        <img className="graph" src="finance-chart.png" alt="chart of sales" />
      </div>
      <></>
      <div>
        <span>
          {/* <div className="textBlock"> */}
          {/* <div className="welcome"> */}
          <p className="hero-text">
            Sales need to be track properly. <br />
            Our goal is to track the sales for better decision making whit query
            quick a quick search. sales. <br /> Let's TrackIT
          </p>
          {/* </div> */}
          {/* </div> */}
        </span>
        <img
          src="finance-conference.png"
          alt="conference  table with 5 persons"
        />
      </div>
    </div>
  );
};
export default HomePage;
