import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Product() {
    const [products, setProducts] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState(0);
    const [search, setSearch] = useState("");
    const {cat_id} = useParams();

    useEffect(() => {
        fetch(cat_id ? `http://localhost:9999/products/?catId=${cat_id}` : "http://localhost:9999/products")
            .then(res => res.json())
            .then(result => {
                let searResult = [];
                if(catId==0){
                    searResult = result.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
                    setProducts(searResult);
                }else{
                    searResult = result.filter(p=>p.catId===catId && p.name.toLowerCase().includes(search.toLowerCase()));
                    setProducts(searResult);
                }
            });

        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => setCategories(result));
    }, [catId, search, cat_id]);

    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Form.Select onChange={(e)=>setCatId(parseInt(e.target.value))}>
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
                                onChange={e=>setSearch(e.target.value)}
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
                                products.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>
                                            <Link to={`/product/${p.id}`}>
                                                {p.name}
                                            </Link>
                                        </td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td>
                                            {
                                                categories && categories.find(c => c.id === p.catId)?.name
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

function Category({data}) {
    return (
        <ul>
            {
                data?.map(c => (
                    <li key={c.id}>
                        <Link to={`/products/category/${c.id}`}>
                            {c.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export {
    Category
};