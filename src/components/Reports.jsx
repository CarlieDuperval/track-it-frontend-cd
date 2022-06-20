import { Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ReportFilter from "./ReportFilter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Copyright } from "@mui/icons-material";


// import DataGrid to display a table with different field on my first page
const columns = [
  { field: "year", headerName: "Year", width: 90 },
  { field: "productName", headerName: "Product Name", width: 230 },
  { field: "productCategory", headerName: "Product Category", width: 130 },
  { field: "cost", headerName: "Cost", type: "number", width: 90 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
];

const jan = {
  field: "jan",
  headerName: "Jan Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.jan,
};

const feb = {
  field: "feb",
  headerName: "Feb Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.feb,
};

const mar = {
  field: "mar",
  headerName: "Mar Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.mar,
};

const apr = {
  field: "apr",
  headerName: "Apr Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.apr,
};
const may = {
  field: "may",
  headerName: "May Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.may,
};

const jun = {
  field: "jun",
  headerName: "Jun Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.jun,
};

const jul = {
  field: "jul",
  headerName: "Jul Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.jul,
};

const aug = {
  field: "aug",
  headerName: "Aug Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.aug,
};

const sep = {
  field: "sep",
  headerName: "Sep Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.sep,
};

const oct = {
  field: "oct",
  headerName: "Oct Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.oct,
};

const nov = {
  field: "nov",
  headerName: "Nov Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.nov,
};

const dec = {
  field: "dec",
  headerName: "Dec Qty Sold",
  type: "number",
  width: 130,
  valueGetter: (params) => params.row.qtySold.dec, // getting va;ue from nested object
};

const allMonths = {
  jan: jan,
  feb: feb,
  mar: mar,
  apr: apr,
  may: may,
  jun: jun,
  jul: jul,
  aug: aug,
  sep: sep,
  oct: oct,
  nov: nov,
  dec: dec,
};
const Reports = ({ sales, setDisplaySales, displaySales }) => {
  const navigate = useNavigate();

  //useState to track the month
  const [displayCols, setDisplayCols] = useState([
    ...columns,
    ...Object.values(allMonths),
  ]);

  const handleMonthSelect = (month, values) => {
    if (values) {
      const displayCols = [...columns];

      values.forEach((val) => {
        displayCols.push(allMonths[val]);
      });

      setDisplayCols(displayCols);

      return;
    }

    if (!month || month === "All") {
      setDisplayCols([...columns, ...Object.values(allMonths)]);
      return;
    }

    setDisplayCols([...columns, allMonths[month]]);
  };

  return (
    <>
    <Grid container>
      <Grid item xs={10}>
      <ReportFilter
        sales={sales}
        setDisplaySales={setDisplaySales}
        handleMonthSelect={handleMonthSelect}
      />
      </Grid>
      <Grid item xs={2} alignItems='center' alignContent='center'>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={() => navigate("/add-newsale")}
      >
        Add Sale
      </Button>
      </Grid>
      </Grid>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={displaySales}
          getRowId={(row) => row._id}
          columns={displayCols}
          pageSize={100}
          rowsPerPageOptions={[1000]}
          checkboxSelection // allows to select rows
        />
        <Copyright />
      </div>
    </>
  );
};

export default Reports;
