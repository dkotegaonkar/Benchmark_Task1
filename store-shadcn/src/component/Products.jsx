import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Products = () => {
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
        {data.map((item) => (
          <Card
            key={item.id}
            className="w-72 h-[31rem] overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[15vw] object-cover"
            />
            <CardContent className="p-4">
              <small className="text-gray-700 dark:text-gray-300">
                {item.category}
              </small>
              <CardTitle className="text-blue-600 text-sm truncate cursor-pointer hover:underline">
                {item.title}
              </CardTitle>
              <CardDescription className="text-sm h-[4rem] overflow-hidden text-ellipsis">
                {item.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="default" className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Products;
