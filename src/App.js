import "./App.css";
import Reports from "./components/Reports";
import React, { useEffect, useState } from "react";

function App() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Reports sales={sales} />
    </div>
  );
}

export default App;
