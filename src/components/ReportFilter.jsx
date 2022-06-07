import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

const ReportFilter = ({ sales }) => {
  //const [reportSearch, setReportSearch] = useState();
  return (
    <Autocomplete
      options={sales} // this is an array of
      // filterOptions={(productName) => productName} // ? determine the filtered option to be rendered on search
      getOptionLabel={(option) => option.productName} // use to determine the disabled state for a given option
      renderInput={(params) => <TextField {...params} label="Product Name" />}
    />
  );
};

export default ReportFilter;
