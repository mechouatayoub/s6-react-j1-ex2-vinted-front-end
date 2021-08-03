import { useState, useEffect } from "react";
import axios from "axios";
import WelcomeMain from "../components/WelcomeMain.js";
import MainBar from "../components/MainBar.js";

function WelcomePage() {
  let [currentPageNumber, setCurrentPageNumber] = useState(1);
  let [isLoaded, setIsLoaded] = useState(false);
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("No error for the moment");
  let [productsv2, setProductsv2] = useState({});
  async function loadingProductData() {
    try {
      let response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );

      let popularProducts = await axios.get(
        "https://vinted-backend-clone.herokuapp.com/products/popular"
      );
      console.log("Produits populaires:", popularProducts);
      let ordinaryProducts = await axios.post(
        `https://vinted-backend-clone.herokuapp.com/products/byUsers/${currentPageNumber}`
      );
      console.log("Produits ordinaires:", ordinaryProducts);
      // console.log("Ma réponse:", response);
      // console.log("Mes datas dans la réponse directe:", response.data);
      // let data = response.data;
      // console.log("Ma réponse stockées:", data);
      setProductsv2({
        popularProducts: popularProducts.data,
        ordinaryProducts: ordinaryProducts.data,
      });
      setProducts(response.data.offers);
      setIsLoaded(true);
      // console.log(products); // product retourne un objet vide?
    } catch (error) {
      setError(error.message);
      console.log("Error:", error.message);
    }
  }
  useEffect(() => {
    loadingProductData();
  }, []);
  return !isLoaded ? (
    <div className="pageContainer">I'm loading the main page {error}</div>
  ) : (
    <div className="pageContainer">
      I'm the main : Request succesfully filled
      {/* <MainBar /> */}
      {/* Une barre de recherche / connexion ... en sticky*/}
      {/* Une barre de navigation entre différentes catégories de produits en sticky */}
      {/* Une seconde partie pour l'affichage d'un Hero */}
      {/* main welcome */}
      <WelcomeMain products={products} productsv2={productsv2} />
    </div>
  );
}

export default WelcomePage;
