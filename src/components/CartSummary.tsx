import React, { useContext } from "react";
import { CartContext } from "../App";
import { CartContextType } from "../types";
import { IconShoppingCart } from "@tabler/icons-react";

const CartSummary: React.FC = () => {
  const { countCartItems } = useContext(CartContext) as CartContextType;
  return (
    <>
      <div className="cartBox">
        <IconShoppingCart />
        <span>{countCartItems()}</span>
      </div>
    </>
  );
};

export default CartSummary;
