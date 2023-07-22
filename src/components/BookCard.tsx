import React, { useContext } from "react";
import { CartContext } from "../App";
import { CartContextType, Book } from "../types";

type Props = {
  book: Book;
  quantity: number;
};

const BookCard: React.FC<Props> = ({ book, quantity }) => {
  const { addToCart } = useContext(CartContext) as CartContextType;

  return (
    <div className="book">
      <h4>{book.title}</h4>
      <p>
        {book.author.firstName} {book.author.lastName}
      </p>
      <img src={book.image} alt={book.title} />
      <p>{book.publisher}</p>
      <p>{book.year}</p>
      <p>{book.price} €</p>
      <button onClick={() => addToCart(book, quantity)}>Add To Cart</button>
    </div>
  );
};

export default BookCard;
