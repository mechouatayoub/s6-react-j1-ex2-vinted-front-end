import ProductsSection from "./ProductsContainer.js";
import { TYPES } from "./ProductsContainer.js";

function WelcomeMain({ products, productsv2 }) {
  console.log("version 2 des produits : ", productsv2);
  return (
    <>
      {" "}
      {/* Un encart d'articles populaires */}
      {/* une barre de filtres prédéfinis par marques */}
      {/* une barre de filtres prédéfinis par suggestion de recherche */}
      {/* un encart contenant le fil de l'actualité */}
      {/* un encart de dressing vitrine ==> mettre en avant un vendeur particulier */}
      <ProductsSection
        title="Articles populaires"
        products={products}
        productsv2={productsv2}
        type={TYPES.SCROLLABLE}
      />
      <ProductsSection
        title="Dressing en vitrine"
        products={products}
        type={TYPES.WRAPPED}
      />
      {/* <ProductsSection
        title="Dressing en vitrine"
        products={products}
        type={TYPES.WRAPPED}
      /> */}
    </>
  );
}
export default WelcomeMain;
