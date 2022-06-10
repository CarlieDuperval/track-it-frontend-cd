import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, Grid, TextField, Input, Button } from "@mui/material";
import { useState } from "react";

const ReportFilter = ({ sales }) => {
  const [report, setReport] = useState([]);
  const handleSubmit = (e) => {
    console.log("here ->", e);
  };

  const getCategories = () => {
    const cats = sales.map((s) => s.productCategory);

    return [...new Set(cats)];
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
          options={getCategories()}
          // getOptionLabel={(sale) => sale.productCategory}
          // getOptionLabel={(sale) => sale}
          onSelect={(e) => handleSubmit(e.target.value)}
          renderInput={(params) => {
            // console.log(params);
            return (
              <TextField {...params} key={params.id} label="Product Category" />
            );
          }}
          renderOption={(props, sale) => {
            return (
              <li {...props} key={sale}>
                {sale}
              </li>
            );
          }}
        />
        <FormControl>
          <Input
            sx={{ width: 300, height: 70 }}
            type="text"
            value={report} // calling sales from myBackend
            onChange={(e) => setReport(e.target.value)}
            renderInput={(params) => (
              <TextField {...params} label="Report By Category" />
            )}
          />
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </FormControl>
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
