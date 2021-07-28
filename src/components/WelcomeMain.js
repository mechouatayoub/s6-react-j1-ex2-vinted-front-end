import ProductsSection from "./ProductsContainer.js";
import { TYPES } from "./ProductsContainer.js";

function WelcomeMain({ products }) {
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
        type={TYPES.SCROLLABLE}
      />
      <ProductsSection
        title="Dressing en vitrine"
        products={products}
        type={TYPES.WRAPPED}
      />
      <ProductsSection
        title="Dressing en vitrine"
        products={products}
        type={TYPES.WRAPPED}
      />
    </>
  );
}
export default WelcomeMain;
