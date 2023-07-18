import React, { useContext } from "react";
import { Book } from "../types";
import { CartContext } from "../App";
import { CartContextType } from "../types";

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
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
      <button onClick={() => addToCart(book)}>Add To Cart</button>
    </div>
  );
};

export default BookCard;
