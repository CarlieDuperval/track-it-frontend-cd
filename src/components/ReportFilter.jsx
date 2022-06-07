import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

const ReportFilter = ({ sales }) => {
  //const [reportSearch, setReportSearch] = useState();
  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={sales} // this is an array of
          getOptionLabel={(option) => option.productName} // use to determine the disabled state for a given option
          renderInput={(params) => (
            <TextField {...params} label="Product Name" />
          )}
        />
        {/* <span> */}
        <Autocomplete
          id="Category-Autocomplete"
          sx={{ width: 300, height: 70 }}
          options={sales} // this is an array of
          getOptionLabel={(productName) => productName.productCategory} // use to determine the disabled state for a given option
          renderInput={(params) => (
            <TextField {...params} label="Product Category" />
          )}
        />
        {/* </span> */}
      </Grid>
    </>
  );
};

export default ReportFilter;
