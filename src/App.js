import "./App.css";
import Reports from "./components/Reports";
import React, { useEffect, useState } from "react";

function App() {
  const [sales, setSales] = useState([]); // To display the sales
  const [displaySales, setDisplaySales] = useState([]); // After the filter the sales will keep displaying
  useEffect(() => {
    fetch("http://localhost:3030/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .then((data) => setDisplaySales(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Reports sales={sales} displaySales={displaySales} />
    </div>
  );
}

export default App;
