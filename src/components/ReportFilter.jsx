import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

const ReportFilter = ({ sales, productName, qtySold, productCategory }) => {
  //const [displayReport, setDisplayReport] = useState();
  const month = [
    { label: "jan" },
    { label: "fev" },
    { label: "mar" },
    { label: "apr" },
    { label: "may" },
    { label: "jun" },
    { label: "jul" },
    { label: "aug" },
    { label: "sep" },
    { label: "oct" },
    { label: "nov" },
    { label: "dec" },
  ];
  const year = [
    { label: "year", value: "2021" },
    { label: "year", value: "2022" },
  ];

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

        <Autocomplete
          sx={{ width: 300, height: 700 }}
          options={productName}
          getOptionLabel={(productName) => productName.value}
          renderInput={(params) => <TextField {...params} />}
        />

        <Autocomplete
          sx={{ width: 300, height: 700 }}
          options={qtySold}
          getOptionLabel={(qtySold) => qtySold.option}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <></>
    </>
  );
};

export default ReportFilter;
