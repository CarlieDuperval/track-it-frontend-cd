import "./App.css";
import Reports from "./components/Reports";
import React, { useEffect, useState } from "react";
import ReportFilter from "./components/ReportFilter";
import { Button, FormControl } from "@mui/material";
import AddNewSale from "./components/AddNewSale";

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
      <ReportFilter sales={sales} />
      <Reports sales={sales} />
      <Button sales={sales} />
      <AddNewSale sales={sales} />
      <FormControl sales={sales} />
    </div>
  );
}

export default App;
