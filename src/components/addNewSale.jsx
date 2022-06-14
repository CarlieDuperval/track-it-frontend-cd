// import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config/config";

const AddNewSale = ({ sales, setSales }) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [year, setYear] = useState(2022);
  const [cost, setCost] = useState(0.0);
  const [price, setPrice] = useState(0.0);
  const [qtySold, setQtySold] = useState({ june: 500 });
  const navigate = useNavigate();

  // TODO: FIX HANDLE SUBMIT

  const handleSubmit = () => {
    const data = {
      productName,
      year,
      productCategory,
      cost,
      price,
      qtySold,
    };

    console.log(data);

    //fetch("https://track-it-backend-cd.web.app/sales", {
    fetch(config.apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("We are there");
        return res.json();
      })
      .then((sale) => {
        setSales([...sales, sale]);
        navigate("/dashboard");
      })
      .catch(console.error);
  };

  const handleQtySold = (month, qty) => {
    const newQtySold = { ...qtySold };
    newQtySold[month] = qty;
    setQtySold(newQtySold);
  };

  return (
    <FormControl>
      <TextField
        type="text"
        label="Product Category"
        variant="filled"
        onChange={(e) => setProductCategory(e.target.value)}
        value={productCategory}
      />
      <TextField
        type="text"
        label="Product Name"
        variant="filled"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      />
      <TextField
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        label="Price"
        variant="filled"
      />
      <TextField
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        label="Cost"
        variant="filled"
      />
      <TextField
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        label="Year"
        variant="filled"
      />
      <Button onClick={() => handleSubmit()}>Add New Sale</Button>
    </FormControl>
  );
};

export default AddNewSale;
