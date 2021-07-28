// import axios from "axios";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import OwnerAvatar from "../components/OwnerAvatar";
function ProductPage() {
  console.log("Im in the product page");
  let [isLoaded, setIsLoaded] = useState(false);
  let [data, setData] = useState([]);
  // const { id } = useParams();
  // console.log(id);

  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       let address = `https://lereacteur-vinted-api.herokuapp.com/offer/`;
  //       console.log(address);
  //       let response = await axios.get(address);
  //       let data = response.data;
  //       setData(data);
  //       setIsLoaded(true);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   loadData();
  // }, []);
  return !isLoaded ? (
    <div>I'm loading the page</div>
  ) : (
    <div className="pageContainer">
      I'm a product page
      {/* Prix */}
      <div>
        {" "}
        {/* {Number(data.product_price).toFixed(2).toString().replace(".", ",")} € */}
      </div>
      {/* marque */}
      {/* <div>{data.product_details[0]["MARQUE"]}</div> */}
      {/* taille */}
      {/* <div>{data.product_details[1]["TAILLE"]}</div> */}
      {/* état */}
      {/* <div>{data.product_details[2]["ÉTAT"]}</div> */}
      {/* couleur */}
      {/* <div>{data.product_details[2]["COULEUR"]}</div> */}
      {/* emplacement */}
      {/* <div>{data.product_details[2]["EMPLACEMENT"]}</div> */}
      {/* mode de paiement */}
      {/* <div>{data.product_details[2]["MODE DE PAIEMENT"]}</div> */}
      {/* nom du produit */}
      {/* <div>{data.product_name}</div> */}
      {/* description du produit */}
      {/* <div>{data.product_description}</div> */}
      {/* userEncart */}
      {/* <OwnerAvatar userName={data.owner.account.username} /> */}
    </div>
  );
}

export default ProductPage;
