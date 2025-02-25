import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const fetchProducts = async (category) => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  const response = await axios.get(`${url}`);
  return response.data;
};

const Products = () => {
  const { category } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchProducts(category),
    enabled: true,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  if (!data || data.length === 0) {
    return <h2>No products found.</h2>;
  }

  return (
    <Row xs={1} md={4} className="g-4">
      {data.map((item, idx) => (
        <Col key={idx}>
          <Card
            style={{
              width: "18rem",
              margin: "9px",
              height: "31rem",
              overflow: "hidden",
            }}
          >
            <Card.Img
              variant="top"
              src={item.image}
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            />
            <small className="text-muted">{item.category}</small>
            <Card.Body>
              <Card.Title
                //   onClick={() => {
                //     setDispProduct(item);
                //     setShow(true);
                //   }}
                style={{
                  fontSize: "1rem",
                  height: "1rem",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                  color: "blue",
                  // textDecoration: "underline",
                }}
                // onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                // onMouseLeave={(e) => e.target.style.textDecoration = "none"}
              >
                {item.title}
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "0.9rem",
                  height: "4rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
