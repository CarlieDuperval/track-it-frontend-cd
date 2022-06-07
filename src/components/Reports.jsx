import { DataGrid } from "@mui/x-data-grid";

// import DataGrid to display a table with different field on my first page
const columns = [
  //   { field: "_id", headerName: "ID", width: 90 ,  },
  { field: "year", headerName: "Year", width: 90 },
  { field: "productName", headerName: "Product Name", width: 230 },
  { field: "productCategory", headerName: "Product Category", width: 130 },
  { field: "cost", headerName: "Cost", type: "number", width: 90 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  {
    field: "jan",
    headerName: "Jan Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.jan,
  },
  {
    field: "feb",
    headerName: "Feb Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.feb,
  },
  {
    field: "mar",
    headerName: "Mar Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.mar,
  },
  {
    field: "apr",
    headerName: "Apr Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.apr,
  },
  {
    field: "may",
    headerName: "May Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.may,
  },
  {
    field: "jun",
    headerName: "Jun Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.jun,
  },
  {
    field: "jul",
    headerName: "Jul Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.jul,
  },
  {
    field: "aug",
    headerName: "Aug Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.aug,
  },
  {
    field: "sep",
    headerName: "Sep Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.sep,
  },
  {
    field: "oct",
    headerName: "Oct Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.oct,
  },
  {
    field: "nov",
    headerName: "Nov Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.nov,
  },
  {
    field: "dec",
    headerName: "Dec Qty Sold",
    type: "number",
    width: 90,
    valueGetter: (params) => params.row.qtySold.dec, // getting va;ue from nested object
  },
];
const Reports = ({ sales }) => {
  //useEffect(() => {}, []).then((response) => response.json());
  return (
    // style with css Property
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={sales} // set "sales" rows as Grid Row Property
        getRowId={(row) => row._id} // return the row _id from mongoDatabase
        columns={columns} // setting our columns as same type of Grid columns
        pageSize={100} // setting the number of row in one page
        rowsPerPageOptions={[1000]} // It's select the pageSize for the UI
        checkboxSelection // allows to select rows
      />
    </div>
  );
};

export default Reports;
