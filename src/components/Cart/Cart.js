import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // const total = cart.reduce((previous, product) => previous + product.price, 0);

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = ((total + shipping) * 5) / 100;
  const subtotal = total + shipping + tax;

  return (
    <div className="summery">
      <h3>Order Summery</h3>
      <p>Items Ordered: {totalQuantity}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <p>Shipping: ${shipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
      <button>Review Your Order</button>
    </div>
  );
};

export default Cart;
