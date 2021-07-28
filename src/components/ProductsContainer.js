import Product from "./Product.js";
function ProductsSection({ title, products, type }) {
  console.log(type);
  return (
    <div className="productsSection generalContainer">
      <div className="productSectionTitle">
        <h2>{title}</h2>
        <button className="voirTout">Voir tout</button>
      </div>

      {/* <h3>Type: {type}</h3> */}
      <div className={`productsList ${type}`}>
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

export const TYPES = { SCROLLABLE: "scrollable", WRAPPED: "wrapped" };
export default ProductsSection;
