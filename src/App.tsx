import React, { useState, createContext } from "react";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";
import { Book, CartContextType, CartType } from "./types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartDetails from "./components/CartDetails";

export const CartContext = createContext({});

const App: React.FC = () => {
  const [cart, setCart] = useState({} as CartType);

  const addToCart = (book: Book) => {
    if (!cart[book.id]) {
      cart[book.id] = { book: book, quantity: 1 };
    } else {
      cart[book.id].quantity += 1;
    }
    setCart({ ...cart });
  };

  const removeFromCart = (book: Book) => {
    if (cart[book.id].quantity === 1) {
      delete cart[book.id];
    } else {
      cart[book.id].quantity -= 1;
    }
    setCart({ ...cart });
  };

  const emptyCart = () => {
    setCart({});
  };

  const countCartItems = () => {
    let count = 0;
    Object.keys(cart).map((key) => {
      count += cart[key].quantity;
    });

    return count;
  };

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
    countCartItems,
  };

  return (
    <>
      <Router>
        <CartContext.Provider value={contextValue}>
          <div className="head">
            <h1 className="headTitle">
              <Link to="/">JAVASCRIPT BOOKS SHOP</Link>
            </h1>
            <Link to="/cart">
              <CartSummary />
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/cart" element={<CartDetails />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
