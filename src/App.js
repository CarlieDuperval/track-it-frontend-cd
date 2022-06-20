import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewSale from "./components/AddNewSale";
import Reports from "./components/Reports";
import config from "./config/config";
import ContextProvider, { UserContext } from "./ContextProvider";
import NewLandingPage from "../src/components/NewLandingPage";
import UserContextProvider from "./ContextProvider";

function App() {
  const [sales, setSales] = useState([]); // To display the sales
  const [displaySales, setDisplaySales] = useState([]);
  const { jwt } = useContext(UserContext)

  useEffect(() => {
    fetch(config.apiUrl, {
      method: 'GET',
      headers: {
        Authorization: jwt
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
        setDisplaySales(data);
      })
      .catch((error) => console.error(error));
  }, [jwt]);

  return (
    <UserContextProvider>
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewLandingPage />} />
            <Route
              path="/add-newsale"
              element={
                <AddNewSale sales={displaySales} setSales={setDisplaySales} />
              }
            />
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
    </UserContextProvider>
  );
}

export default App;
