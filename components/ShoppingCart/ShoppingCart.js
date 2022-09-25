import React, { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";




const ShoppingCart = (props) => {
  const context = useContext(CartContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item Liked!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
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
  // const {cart, removeFromCart} = useContext(CartContext);

  // return (
  //   <>
  //     <h3>Liked</h3>
  //     <div className={styles.cartBox}>
  //       {cart && cart.map((cartItem, index) => {
  //         return (
  //           <li key={index}>
  //             <div>{cartItem.name}</div>
  //             <div>{cartItem.quantity}</div>
  //             <button onClick={removeFromCart}>remove</button>
  //           </li>
  //         )
  //       })}
  //     </div>
      
  //     {/* <div className={styles.cartBox}>
  //       <div className={styles.cartItem}> 123</div>
  //       <div className={styles.cartItem}>432</div>
  //     </div> */}
  //   </>
    
  // )
}

export default ShoppingCart