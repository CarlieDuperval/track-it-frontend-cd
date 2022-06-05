import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";

export const ReportFilter = () => {
  const [reportSearch, setReportSearch] = useState();

  useEffect(() => {}, []).then((response) => response.json());

  return <Autocomplete options={products} />;
};
