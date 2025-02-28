import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCategory = async () => {
  const response = await axios("https://fakestoreapi.com/products/categories");
  return response.data
};

const Menu = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  if(isLoading){
    return <h2>Loading</h2>
  }
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><Link to={`/`}>Home</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Categories</MenubarTrigger>
          <MenubarContent>
          {data.map((category) => (
            <div key ={category}>
              <MenubarItem asChild><Link to={`/${category}`}>{category}</Link></MenubarItem>
              <MenubarSeparator />
            </div>
          ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger><Link to={`/cart`}>Cart</Link></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default Menu;
