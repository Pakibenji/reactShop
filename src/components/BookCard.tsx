import React from "react";
import { Book } from "../types";

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
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
    </div>
  );
};

export default BookCard;
