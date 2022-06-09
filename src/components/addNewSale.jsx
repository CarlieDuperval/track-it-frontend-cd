import { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";

const AddNewSale = () => {
  const [sales, setSales] = useState();
  let fields = [
    { year: "year" },
    { productName: "productName" },
    { productCategory: "productCategory" },
    { cost: "cost" },
    { price: "price" },
    { qtySold: "qtySold" },
  ];
  if (!fields) {
    return;
  }
  const handleSubmit = () => {
    fetch("http://localhost:3030/sales", {
      method: "POST",
      headers: {
        " Content-type": "application/json",
      },
      body: JSON.stringify({
        year: "year",
        productName: "productName",
        productCategory: "productCategory",
        cost: "cost",
        price: "price",
        qtySold: "qtySold",
      }),
    })
      .then((res) => res.text())
      .then((sales) => sales.push.sale()) // push to sale array
      .catch(console.error);
  };
  return (
    <FormControl>
      <Input
        type="text"
        value={sales} // calling sales from myBackend
        onChange={(e) => setSales(e.target.value)}
      />
      <Button onClick={() => handleSubmit()}>Add Sale</Button>
    </FormControl>
  );
};

export default AddNewSale;
