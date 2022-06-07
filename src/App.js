import "./App.css";
import Reports from "./components/Reports";
import React, { useEffect, useState } from "react";
import ReportFilter from "./components/ReportFilter";

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
      {/* import the components */}
      <ReportFilter sales={sales} />
      <Reports sales={sales} />
    </div>
  );
}

export default App;
