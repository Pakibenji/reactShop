import React, { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../types";
import BookCard from "./BookCard";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className="bookListTitle">Livres</h3>
      {books.length === 0 ? (
        <p className="loadingBooks">Chargement...</p>
      ) : (
        <div className="booksContainer">
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default BookList;
