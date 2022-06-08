import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  const tax = (total * 7) / 100;
  const shipping = (total * 5) / 100;
  const subTotal = total + tax + shipping;

  return (
    <div className="summery">
      <h3>Order Summery</h3>
      <p>Items Ordered: {props.cart.length}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Shipping Cost: $ {shipping.toFixed(2)}</p>
      <p className="subtotal">Subtotal: ${subTotal.toFixed(2)}</p>
      <button>Purchase</button>
    </div>
  );
};

export default Cart;
