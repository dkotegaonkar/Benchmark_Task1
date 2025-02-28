import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useCartStore from "../store/useCartStore";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Products = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((item) => {
        const inCart = cart[item.id] ? cart[item.id].quantity : 0;
        return (
          <Card key={item.id} className="w-72 h-[31rem] overflow-hidden shadow-lg flex flex-col">
            <div className="h-[200px] flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.title} className="h-[250px] w-full object-cover" />
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
              <small className="text-gray-700 dark:text-gray-300">{item.category}</small>
              <CardTitle className="text-blue-600 text-sm truncate cursor-pointer hover:underline">
                <Link to={`/${item.id}`}>{item.title}</Link>
              </CardTitle>
            </CardContent>
            <CardFooter className="p-4 mt-auto">
              {inCart === 0 ? (
                <Button className="w-full" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center justify-between w-full border rounded-lg p-2">
                  <Button size="icon" variant="outline" onClick={() => removeFromCart(item.id)}>
                    -
                  </Button>
                  <span>{inCart}</span>
                  <Button size="icon" variant="outline" onClick={() => addToCart(item)}>
                    +
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        );
      })}
      </div>
    </>
  );
};

export default Products;
