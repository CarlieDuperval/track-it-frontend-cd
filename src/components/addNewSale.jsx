import { useState } from "react";

const AddNewSale = ({ sales }) => {
  //newSale = [ {year:" "  ,productName:"", productCategory:"", cost:"", price:"", qtySold:""}]
  //let newYear = [{label:"2021", year:2021 , labe:"2022" , year:2022}]
  //   const [year, setYear] = useState();
  //   const [productName, setProduct] = useState();
  //   const [productCategory, setProductCategory] = useState();
  //   const [cost, setCost] = useState();
  //   const [price, setPrice] = useState();
  //   const [qtySold, setQtySold] = useState();
  const [sale, setSale] = useState(sale);
  if (
    !year ||
    !productName ||
    !productCategory ||
    !cost ||
    !price ||
    !qtySold
  ) {
    return;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/sales", {
      method: "POST",
      headers: {
        " Content-type": "application/json",
      },
      body: JSON.stringify({
        year,
        productName,
        productCategory,
        cost,
        price,
        qtySold,
      }),
    })
      .then((res) => res.text()) // or res.json()????
      .then((sale) => sale.push.sales()) // I need to push the return value to my array of sale
      .catch(console.error); // ??
  };
  return (
    <form>
      <input
        type="text"
        value={sales} // calling sales from myBackend
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="button" onClick={() => handleSubmit()}>
        Add Sale
      </button>
    </form>
  );
};

export default AddNewSale;
