import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewSale from "./components/AddNewSale";
import Reports from "./components/Reports";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Hero from "./components/Home/Hero";
import config from "./config/config";
import { contextProvider } from "./contextProvider";

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
      <BrowserRouter>
        <contextProvider>
          <Routes>
            <Route path="/" element={<Hero />} />
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
        </contextProvider>
      </BrowserRouter>

      {/* <Button sales={sales} /> */}

      {/* <Hero />
      <Footer /> */}
    </div>
  );
}

export default App;
