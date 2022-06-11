import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";
import { gridDensityHeaderHeightSelector } from "@mui/x-data-grid";
import { handleBreakpoints } from "@mui/system";

const ReportFilter = ({ sales }) => {
  const handleSubmit = (e) => {
    console.log("here ->", e);
  };

  const getProductName = () => {
    const prodName = sales.map((s) => s.productName);
    return [...new Set(prodName)];
  };
  const getCategories = () => {
    const cats = sales.map((s) => s.productCategory);

    return [...new Set(cats)]; // set each category
  };
  const getYearSalesQty = () => {
    const year = sales.map((s) => s.year);
    return [...new Set(year)];
  };
  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getProductName()}
          //options={sales} // an array
          //getOptionLabel={(option) => option.productName} // determine a string value for a given option
          onSelect={(e) => handleSubmit(e.target.value)}
          renderInput={(params) => {
            return (
              <TextField {...params} key={params.id} label="Product Name" />
            );
          }}
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
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getYearSalesQty()}
          onSelect={(e) => handleBreakpoints(e.target.value)}
          renderInput={(params) => {
            return <TextField {...params} key={params.id} label="Year" />;
          }}
          renderOption={(props, sale) => {
            return (
              <li {...props} key={sale}>
                {sale}
              </li>
            );
          }}
        />
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
