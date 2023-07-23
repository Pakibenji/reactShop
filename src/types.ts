export type Book = {
    quantity: number;
    id: number;
    title: string;
    author: {
      lastName: string;
      firstName: string;
    };
    publisher: string;
    year: number;
    price: number;
    image: string;
  };

  export type CartContextType = {
    cart: CartType;
    addToCart: (book: Book, quantity: number) => void;
    removeFromCart: (book: Book) => void;
    emptyCart: () => void;
    countCartItems: () => number;
  };

  export type CartType = {
    [key: number | string]: {
      book: Book;
      quantity: number;
    };
  };