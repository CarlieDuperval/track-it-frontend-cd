import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField } from "@mui/material";

const ReportFilter = ({ sales, setDisplaySales }) => {
  const handleProduct = (productName) => {
    if (!productName.length) {
      console.log("this is the product", productName.length);
      setDisplaySales(sales);
      return;
    }

    const filteredProducts = sales.filter(
      (product) => product.productName === productName
    );

    setDisplaySales(filteredProducts);
  };

  const handleCategorySelect = (productCategory) => {
    if (!productCategory.trim()) {
      setDisplaySales(sales);
    }

    const filteredProducts = sales.filter(
      (product) => product.productCategory === productCategory
    );
    setDisplaySales(filteredProducts);
  };

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
  // const getMonth = () => {
  //   const month = sales.map((s) => s.janQtySold);
  //   return [...new Set(month)];
  // };

  return (
    <>
      <Grid container spacing={1}>
        <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getProductName()}
          //options={sales} // an array
          //getOptionLabel={(option) => option.productName} // determine a string value for a given option
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
          // getOptionLabel={(sale) => sale.productCategory}
          // getOptionLabel={(sale) => sale}
          onSelect={(e) => handleCategorySelect(e.target.value)}
          renderInput={(params) => {
            // console.log(params);
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
        {/* <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getYear()}
          onSelect={(e) => handleSubmit(e.target.value)}
          renderInput={(params) => {
            return <TextField {...params} key={params.id} label="Year" />;
          }}
          renderOption={(props, sale) => {
            return (
              <li {...props} key={sale}>
                {sale}
              </li>
            );
          }}
        /> */}
        {/* <Autocomplete
          sx={{ width: 300, height: 70 }}
          options={getMonth()}
          onSelect={(e) => handleSubmit(e.target.value)}
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
        /> */}
      </Grid>
    </>
  );
};

export default ReportFilter;
