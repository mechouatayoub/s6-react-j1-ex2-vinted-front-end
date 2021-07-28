import { useState, useEffect } from "react";
import axios from "axios";
import WelcomeMain from "../components/WelcomeMain.js";

function WelcomePage() {
  let [isLoaded, setIsLoaded] = useState(false);
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("No error for the moment");
  async function loadingProductData() {
    try {
      let response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log("Ma réponse:", response);
      // console.log("Mes datas dans la réponse directe:", response.data);
      // let data = response.data;
      // console.log("Ma réponse stockées:", data);
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
      {/* Une barre de recherche / connexion ... en sticky*/}
      {/* Une barre de navigation entre différentes catégories de produits en sticky */}
      {/* Une seconde partie pour l'affichage d'un Hero */}
      {/* main welcome */}
      <WelcomeMain products={products} />
    </div>
  );
}

export default WelcomePage;
