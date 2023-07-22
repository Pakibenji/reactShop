import React, { useContext } from "react";
import { CartContext } from "../App";
import { CartContextType } from "../types";

const CartDetails: React.FC = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  return (
    <>
      <div className="cartDetails">
        <h2>Cart Details</h2>
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((key) => {
              const { book, quantity } = cart[key];
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{quantity}</td>
                  <td>{book.price}</td>
                  <td>{book.price * quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartDetails;
