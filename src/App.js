import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewSale from "./components/AddNewSale";
import Reports from "./components/Reports";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import HomePage from "./components/Home/HomePage";
import config from "./config/config";
import ContextProvider from "./ContextProvider";
import LandingPage from "./components/LandingPage";

function App() {
  const [sales, setSales] = useState([]); // To display the sales
  const [displaySales, setDisplaySales] = useState([]);
  useEffect(() => {
    fetch(config.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
        setDisplaySales(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/add-newsale"
              element={
                <AddNewSale sales={displaySales} setSales={setDisplaySales} />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <Reports
                  sales={sales}
                  displaySales={displaySales}
                  setDisplaySales={setDisplaySales}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
