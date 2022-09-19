import { Button, Grid } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config/config";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Copyright from "./Home/Copyright";

const AddNewSale = ({ sales, setSales }) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [year, setYear] = useState(2022);
  const [cost, setCost] = useState(0.0);
  const [price, setPrice] = useState(0.0);
  const [qtySold, setQtySold] = useState({});
  const [month, setMonth] = useState("jan");
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      productName,
      year,
      productCategory,
      cost,
      price,
      qtySold,
    };

    fetch(config.apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((sale) => {
        setSales([...sales, sale]);
        navigate("/dashboard");
      })
      .catch(console.error);
  };

  const handleQtySold = () => {
    const newQtySold = { ...qtySold };
    newQtySold[month] = qty;
    setQtySold(newQtySold);
  };

  const getMonth = () => {
    return [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
  };

  return (
    <FormControl className="form-add-sale">
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
      <Grid container>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getMonth()}
          onSelect={(e) => setMonth(e.target.value)}
          renderInput={(params) => {
            return <TextField variant="filled" {...params} label="Month" />;
          }}
        />

        <TextField
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          label="Qty"
          variant="filled"
        />

        <Button onClick={() => handleQtySold()}>
          <AddCircleIcon />
        </Button>
      </Grid>
      <Button fullWidth
        variant="contained" onClick={() => handleSubmit()}>Add New Sale</Button>

      <Copyright  />
    </FormControl>
  );
};

export default AddNewSale;
