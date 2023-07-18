import React, { useState, createContext } from "react";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";
import { Book, CartContextType } from "./types";

export const CartContext = createContext({});

const App: React.FC = () => {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart([...cart, book]);
  };
  const contextValue: CartContextType = {
    cart,
    addToCart,
  };

  return (
    <div>
      <CartContext.Provider value={contextValue}>
        <h1 className="headTitle">JAVASCRIPT BOOKS SHOP</h1>
        <CartSummary />
        <BookList />
      </CartContext.Provider>
    </div>
  );
};

export default App;
