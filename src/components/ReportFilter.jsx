import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

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
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
