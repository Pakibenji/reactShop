export type Book = {
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