import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const mutation = useMutation({
    mutationFn: async (newProduct) => {
      const response = await axios.post("https://fakestoreapi.com/products", newProduct);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Product added:", data);
      setFormData({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">title</InputGroup.Text>
        <Form.Control
        name="title"
        value={formData.title}
        onChange={handleChange}
          aria-label="title"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">price</InputGroup.Text>
        <Form.Control
        name="price"
        value={formData.price}
        onChange={handleChange}
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">description</InputGroup.Text>
        <Form.Control
        name="description"
        value={formData.description}
        onChange={handleChange}
          aria-label="description"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">image</InputGroup.Text>
        <Form.Control
        name="image"
        value={formData.image}
        onChange={handleChange}
          aria-label="image"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">category</InputGroup.Text>
        <Form.Control
        name="category"
        value={formData.category}
        onChange={handleChange}
          aria-label="category"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        submit
      </Button>
    </form>
  </div>;
};

export default AddProducts;
