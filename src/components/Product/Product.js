import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, seller, stock } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p className="seller-wrapper">
          <small>
            by: <span className="seller">{seller}</span>
          </small>
        </p>
        <p className="price">
          Price: <span className="price-tag">${price}</span>
        </p>
        <p className="stock-wrapper">
          <small>
            Only <span className="stock-count">{stock}</span> items left in
            stock!
          </small>
        </p>
        <button onClick={() => props.handleAddToCart(props.product)}>
          {cartIcon} Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
