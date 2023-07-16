import React from "react";
import BookList from "./components/BookList";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="headTitle">JAVASCRIPT BOOKS SHOP</h1>
      <BookList />
    </div>
  );
};

export default App;
