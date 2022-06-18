import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src="finance-chart.png" alt="chart for graphs" />
      </div>
      <h2>Track iT</h2>
      <div>
        <div>
          <span>
            <h2> Who are we?</h2>
          </span>
        </div>
        <img
          src="finance-conference.png"
          alt="conference consisting of 5 financial analysts"
        />
      </div>
    </>
  );
};

export default LandingPage;
