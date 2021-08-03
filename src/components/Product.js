import OwnerAvatar from "./OwnerAvatar";
import { Link } from "react-router-dom";
function Product({ product }) {
  console.log("im in the product2:", product);
  console.log("my product id 2: ", product._id);
  function go() {
    console.log("mon produit:", product);
    return `/offer/${product._id}`;
  }
  return (
    <div className="productCard">
      {/* Il faut implémenter le clique */}
      {/* mettre en forme l'image */}
      <OwnerAvatar
        userName={product.owner.account.username}
        url={product.owner.account.url}
      />
      <Link to={`/offer/${product._id}`}>
        <div className="productImageWidth">
          <div className="productImageHeight">
            <div className="productImageContainer">
              <img
                className="productImage"
                src={product.product_image.secure_url}
                alt={product.product_name.toLowerCase().replace(" ", "-")}
              />
            </div>
          </div>
        </div>
      </Link>

      {/* <div className="minifiedImageContainer">
        
      </div> */}
      <div className="productPrice">
        {Number(product.product_price).toFixed(2).toString().replace(".", ",")}{" "}
        €
      </div>
      <div className="productSize">{product.product_details[1]["TAILLE"]}</div>
      <div className="productBrand">{product.product_details[0]["MARQUE"]}</div>
      {/* hello my name is ayoubmechouta and i love you */}
    </div>
  );
}

export default Product;
