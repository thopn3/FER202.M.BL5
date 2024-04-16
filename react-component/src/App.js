import Product, { Category } from "./components/Product";
import AddProduct from "./components/AddProduct";
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductDetail from "./components/ProductDetail";

function App() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/categories")
      .then(res => res.json())
      .then(result => setCategories(result));
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col style={{ textAlign: "center", lineHeight: "50px", borderBottom: "1px solid blue" }}>Header</Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col xs={12} sm={5} md={3}><Category data={categories} /></Col>
          <Col xs={12} sm={7} md={9}>

            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/create" element={<AddProduct categories={categories}/>} />
              <Route path="/products/category/:cat_id" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", lineHeight: "50px", borderTop: "1px solid blue" }}>Footer</Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
