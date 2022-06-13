import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import ReportFilter from "./components/ReportFilter";
import AddNewSale from "./components/AddNewSale";
import Reports from "./components/Reports";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
//import { Button } from "@mui/material";
import Hero from "./components/Home/Hero";

function App() {
  const [sales, setSales] = useState([]); // To display the sales
  useEffect(() => {
    fetch("https://track-it-backend-cd.web.app/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/addnewsale"
            element={<AddNewSale sales={sales} setSales={setSales} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard/"
            element={
              <>
                <Reports sales={sales} setSales={setSales} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <Button sales={sales} /> */}

      {/* <Hero />
      <Footer /> */}
    </div>
  );
}

export default App;
