import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, Grid, TextField, Input } from "@mui/material";
import { useState } from "react";

const ReportFilter = ({ sales }) => {
  // const [inputName, setInputName] = useState();
  // const [inputCategory, setInputCategory] = useState();
  // useEffect(() => {
  //   let filteredReport = { productName, productCategory }; // set the report to product name or category
  //   // if given inputName
  //   if (inputName) {
  //     // loop inside productName witch is inside sales collection , filter the inputName
  //     filteredReport = filteredReport.filter(
  //       (productName) => productName.sales === inputName // return inputName
  //     );
  //   }
  //   setInputName(filteredReport);
  //   if (inputCategory) {
  //     filteredReport = filteredReport.filter(
  //       (productCategory) => productCategory.sales === inputCategory
  //     );
  //   }
  //   setInputCategory(filteredReport);
  //   //when i added the dependencies on the [] ; nothing show on my report
  // }, [inputCategory, inputName, productCategory, sales, productName]); // ????? I leave the useEffect[] without dependencies : error --> missing dependencies
  const [report, setReport] = useState([]);
  fetch("http://localhost:3030/sales", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      report,
    }),
  })
    .then((response) => response.text())
    .then((sales) => sales.find({}).sort({}))
    .catch(console.error);

  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={sales} // this is an array of
          getOptionLabel={(option) => option.productName} // use to determine a string value for a given option
          renderInput={(params) => (
            <TextField {...params} label="Product Name" />
          )}
        />

        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={sales} // this is an array of
          getOptionLabel={(productName) => productName.productCategory} // use to determine the disabled state for a given option
          renderInput={(params) => (
            <TextField {...params} label="Product Category" />
          )}
        />
        <FormControl>
          <Input
            type="text"
            value={report} // calling sales from myBackend
            onChange={(e) => setReport(e.target.value)}
          />
        </FormControl>
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
