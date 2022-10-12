import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

function GlobalState(props) {
  const products = [
    {
      "id": 1,
      "type" : "Desserts",
      "image" : "https://sketchfab.com/models/e7822dcde0c448289e62daeb6075d680/embed",
      "title" : "French Fruit Tart",
     
  },
  {
      "id": 2,
      "type" : "Sandwiches and Pizzas",
      "image" : "https://sketchfab.com/models/4a8bcaa5acf94372a369406abae94833/embed",
      "title" : "Pepperoni Pizza",
     
  },
  {
      "id": 3,
      "type" : "Desserts",
      "image" : "https://sketchfab.com/models/01df2ca8d2c74778ac44c727884ccb96/embed",
      "title" : "Raspberry Cake",
    
  },
  {
      "id": 4,
      "type" : "Big Box Meals",
      "image" : "https://sketchfab.com/models/098ebbb16fb64559a9e025119d8f5449/embed",
      "title" : "Beef Buns and chips",
   
  },
  {
      "id": 5,
      "type" : "Sandwiches and Pizzas",
      "image" : "https://sketchfab.com/models/1c6f76f53e8a4f8ba29de91630e4cadc/embed",
      "title" : "Beef Tender Sandwich",
    
  },
  {
    "id": 6,
    "type" : "Big Box Meals",
    "image" : "https://sketchfab.com/models/ce30b53968ef4083aca297a8b1aed691/embed",
    "title" : "Avocado Salad",

  },
  {
    "id": 7,
    "type" : "Big Box Meals",
    "image" : "https://sketchfab.com/models/0d339a3a91304192b4fc8d61ebd48bb1/embed",
    "title" : "Chicken Sandwich Platter",

  }
];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default GlobalState;