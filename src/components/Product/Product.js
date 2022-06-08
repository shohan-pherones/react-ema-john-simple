import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, img, price, seller, stock } = props.product;
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
      </div>
    </div>
  );
};

export default Product;
