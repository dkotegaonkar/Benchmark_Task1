import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useCartStore from "../store/useCartStore";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const cartItems = Object.values(cart);

  if (cartItems.length === 0) return <p className="p-4 text-center">Your cart is empty.</p>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Card className="p-4">
        <CardContent>
          <CardTitle>Shopping Cart</CardTitle>
          <ul className="mt-4 space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border rounded-lg">
                <span className="truncate">{item.title}</span>
                <div className="flex items-center space-x-2">
                  <Button size="icon" variant="outline" onClick={() => removeFromCart(item.id)}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="icon" variant="outline" onClick={() => addToCart(item)}>
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;