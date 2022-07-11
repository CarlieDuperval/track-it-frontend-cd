import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

//Passing props
const ReportFilter = ({ sales, setDisplaySales, handleMonthSelect }) => {
  const handleProduct = (productName) => {
    if (!productName.trim()) {
      setDisplaySales(sales);
      return;
    }
    // set filter for product inside my array: sales
    const filteredProducts = sales.filter(
      (product) => product.productName === productName
    );

    setDisplaySales(filteredProducts);
  };

  const handleCategorySelect = (productCategory) => {
    if (!productCategory.trim()) {
      setDisplaySales(sales);
    }

  //   const filteredProducts = sales.filter(
  //     (product) => product.productCategory === productCategory
  //   );
  //   setDisplaySales(filteredProducts);
  // };

  const getProductName = () => {
    const prodName = sales.map((s) => s.productName);
    return [...new Set(prodName)];
  };
  const getCategories = () => {
    const cats = sales.map((s) => s.productCategory);

    return [...new Set(cats)]; // set each category
  };

  // const getYear = () => {
  //   const year = sales.map((s) => s.year);
  //   return [...new Set(year)];
  // };
  const getMonth = () => {
    return [
      // "All",
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
  };

  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getProductName()}
          onSelect={(e) => handleProduct(e.target.value)}
          renderInput={(params) => {
            return (
              <TextField {...params} key={params.id} label="Product Name" />
            );
          }}
        />

        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getCategories()}
          onSelect={(e) => handleCategorySelect(e.target.value)}
          renderInput={(params) => {
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
          multiple
          sx={{ width: 300, height: 70 }}
          options={getMonth()}
          onSelect={(e, values) => handleMonthSelect(e.target.value, values)}
          onChange={(e, values) => handleMonthSelect(e.target.value, values)}
          renderInput={(params) => {
            return <TextField {...params} key={params.id} label="Month" />;
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
    </>
  );
};

export default ReportFilter;
