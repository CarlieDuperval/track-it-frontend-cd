import Autocomplete from "@mui/material/Autocomplete";

export const ReportFilter = () => {
  const [reportSearch, setReportSearch] = useState();

  return <Autocomplete options={products} />;
};
