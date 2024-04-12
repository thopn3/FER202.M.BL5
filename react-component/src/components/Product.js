import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Sử dụng cú pháp function -> Tạo 1 component đặt tên là Product
export default function Product({ data = [], categories = [] }) {
    // Tạo ra các biến trạng thái (state) để quản lý dữ liệu cho component
    const [products, setProducts] = useState(data); // products = data; change values of 'products' -> setProducts()
    const [searchResult, setSearchResult] = useState(data);

    const handleSearch = (search) => {
        // Tìm kiếm các product trong mảng 'products'
        const result = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        // Thay đổi trạng thái dữ liệu của 'searchResult' thông qua hàm setSearchResult
        setSearchResult(result);
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Form.Select>
                        <option key={0} value={0}>Select all</option>
                        {
                            categories?.map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
                <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text"
                                placeholder="Enter product name to search ..."
                                style={{ border: "1px solid gray" }}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={3} style={{ textAlign: "right" }}>
                    <Link to={'/product/create'}>Create new product</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped border hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchResult.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td>
                                            {
                                                categories && categories.find(c => c.id === p.catId).name
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

function Category({ data }) {
    return (
        <ul>
            {
                data.map(c => (
                    <li key={c.id}>{c.name}</li>
                ))
            }
        </ul>
    );
}

export {
    Category
};