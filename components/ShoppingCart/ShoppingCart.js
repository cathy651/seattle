import React, { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";

const ShoppingCart = (props) => {
  const context = useContext(CartContext);

  return (
    <React.Fragment>
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item Liked!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> -  (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );

}

export default ShoppingCart