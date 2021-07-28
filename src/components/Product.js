import OwnerAvatar from "./OwnerAvatar";
function Product({ product }) {
  return (
    <div className="productCard">
      {/* Il faut implémenter le clique */}
      {/* mettre en forme l'image */}
      <OwnerAvatar
        userName={product.owner.account.username}
        url={product.owner.account.url}
      />
      <div className="productImageWidth">
        <div className="productImageHeight">
          <div className="productImageContainer">
            <img
              className="productImage"
              src={product.product_pictures[0].secure_url}
              alt={product.product_name.toLowerCase().replace(" ", "-")}
              //   onClick={() => {<Link}}
            />
          </div>
        </div>
      </div>

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
