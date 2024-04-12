import { Form, Container, Row, Col, Button } from 'react-bootstrap';

function AddProduct({ categories = [] }) {
    const handleSubmit = (e)=>{
        // Ngăn chặn hoạt động re-load form sau khi submit
        e.preventDefault();
        alert(document.getElementById("txtId").value);
    };


    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>Create new product</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Id (*)</Form.Label>
                            <Form.Control id='txtId'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Product name (*)</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type='number' min={0} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type='number' min={0} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Create At</Form.Label>
                            <Form.Control type='date' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Create At</Form.Label>
                            <Form.Select>
                                {
                                    categories?.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Status</Form.Label>
                            <Form.Check/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <input type='submit' value={'Create'} className='btn btn-success'/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}

export default AddProduct;