import React, { useState, createContext, useEffect } from "react";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";
import { Book, CartContextType, CartType } from "./types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartDetails from "./components/CartDetails";

export const CartContext = createContext({});

const CART_KEY: string = "js-shop";

const App: React.FC = () => {
  const [cart, setCart] = useState({} as CartType);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage !== null) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    const cartJson = JSON.stringify(cart);
    const isCartEmpty = Object.keys(cart).length === 0;
    if (!isCartEmpty) {
      localStorage.setItem(CART_KEY, cartJson);
    } else {
      localStorage.removeItem(CART_KEY);
    }
    document.title = `JS Shop (${countCartItems()})`;
  }, [cart]);

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
            <div className="cart">
              {" "}
              <Link to="/cart">
                <CartSummary />
              </Link>
            </div>
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
