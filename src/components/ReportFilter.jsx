import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, Grid, TextField, Input, Button } from "@mui/material";
import { useState } from "react";

const ReportFilter = ({ sales }) => {
  const [report, setReport] = useState([]);
  const handleSubmit = () => {
    fetch("http://localhost:3030/sales", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        report,
      }),
    })
      .then((response) => response.text())
      .then((sale) => sale.find({}).sort({})) // filter the report
      .catch(console.error);
  };
  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={sales} // an array
          getOptionLabel={(option) => option.productName} // determine a string value for a given option
          renderInput={(params) => (
            <TextField {...params} label="Product Name" />
          )}
        />

        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={sales}
          getOptionLabel={(productName) => productName.productCategory}
          renderInput={(params) => (
            <TextField {...params} label="Product Category" />
          )}
        />
        <FormControl>
          <Input
            sx={{ width: 300, height: 70 }}
            type="text"
            value={report} // calling sales from myBackend
            onChange={(e) => setReport(e.target.value)}
          />
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </FormControl>
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
