import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportFilter from "./components/ReportFilter";
import AddNewSale from "./components/AddNewSale";
import Reports from "./components/Reports";
import LoginPage from "./components/LoginPage";
import { Button } from "@mui/material";

function App() {
  const [sales, setSales] = useState([]); // To display the sales
  useEffect(() => {
    fetch("http://localhost:3030/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addsale" element={<AddNewSale />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

      <ReportFilter sales={sales} />
      <Reports sales={sales} />
      <Button sales={sales} />
      <AddNewSale sales={sales} setSales={setSales} />

      {/* <Hero />
      <Footer /> */}
    </div>
  );
}

export default App;
