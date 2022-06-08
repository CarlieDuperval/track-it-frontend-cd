import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

const ReportFilter = ({ sales }) => {
  // const [displayReport, setDisplayReport] = useState();

  // useEffect(() => {
  //   let filteredReport = displayReport;
  //   if (inputName) {
  //     filteredReport = filteredReport.filter(
  //       (displayReport) => displayReport.productName === inputName
  //     );
  //   }
  //   if (inputCategory) {
  //     filteredReport = filteredReport.filter(
  //       (displayReport) => displayReport.productCategory === inputCategory
  //     );
  //   }
  // }, [inputName, inputCategory]);

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

        {/* <Autocomplete
          sx={{ width: 300, height: 700 }}
          options={productName}
          getOptionLabel={(productName) => productName.value}
          renderInput={(params) => <TextField {...params}  />}
        /> */}

        {/* <Autocomplete
          sx={{ width: 300, height: 700 }}
          options={ productCategory}
          getOptionLabel={(qtySold) => qtySold.option}
          renderInput={(params) => <TextField {...params}  />}
        /> */}
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
