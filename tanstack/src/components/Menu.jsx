import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const fetchCategories = () => {
    return axios.get('https://fakestoreapi.com/products/categories')
}

const Menu = () => {
    const{data, isLoading, error} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error.message}</h1>;
      }

    if(data){
        console.log(data)
    }
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to={'/'}>Home</Nav.Link>
              <Nav.Link>Logout</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {data.data.map(category => (
                    <NavDropdown.Item as={Link} to={`/${category}`} key={category}>{category}</NavDropdown.Item>
                ))}
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {data.data.map(category => {
                    <h2 key={category}>{category}</h2>
                })}
    </>
  );
};

export default Menu;
