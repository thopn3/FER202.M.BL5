import Product, { Category } from "./components/Product";
import AddProduct from "./components/AddProduct";
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const products = [
  { "id": "P001", "name": "Tủ lạnh Panasonic", "price": 15000000, "quantity": 10, "catId": 1, "createAt": "2024/02/22", "status": true},
  { "id": "P002", "name": "Tivi LG", "price": 10000000, "quantity": 20, "catId": 1, "createAt": "2023/12/20", "status": false },
  { "id": "P003", "name": "Macbook Pro 2024 M2", "price": 35000000, "quantity": 15, "catId": 2, "createAt": "2024/01/10", "status": true }
];

const categories = [
  { "id": 1, "name": "Điện tử - Điện lạnh" },
  { "id": 2, "name": "Máy tính" },
  { "id": 3, "name": "Thiết bị mạng" }
];

function App() {
  return (
    <Container>
      <Row>
        <Col style={{textAlign:"center", lineHeight:"50px", borderBottom:"1px solid blue"}}>Header</Col>
      </Row>
      <Row style={{marginTop:"15px"}}>
        <Col xs={12} sm={5} md={3}><Category data={categories} /></Col>
        <Col xs={12} sm={7} md={9}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Product data={products} categories={categories}/>}/>
              <Route path="/product" element={<Product data={products} categories={categories}/>}/>
              <Route path="/product/create" element={<AddProduct categories={categories}/>}/>
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign:"center", lineHeight:"50px", borderTop:"1px solid blue"}}>Footer</Col>
      </Row>
    </Container>
  );
}

export default App;
