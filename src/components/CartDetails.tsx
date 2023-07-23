import React, { useContext } from "react";
import { CartContext } from "../App";
import { CartContextType } from "../types";
import { IconMinus, IconPlus, IconShoppingCartOff } from "@tabler/icons-react";

const CartDetails: React.FC = () => {
  const { cart, removeFromCart, addToCart, emptyCart } = useContext(
    CartContext
  ) as CartContextType;

  return (
    <>
      <div className="cartDetails">
        <h2>Cart Details</h2>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((key) => {
              const { book, quantity } = cart[key];
              return (
                <tr key={book.id}>
                  <td className="quantity">
                    <IconMinus onClick={() => removeFromCart(book)} />
                    {quantity}
                    <IconPlus
                      onClick={() => {
                        addToCart(book, quantity);
                      }}
                    />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.price} €</td>
                  <td>{(book.price * quantity).toFixed(2)} €</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="emptyCart">
          <IconShoppingCartOff
            onClick={() => {
              emptyCart();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CartDetails;
