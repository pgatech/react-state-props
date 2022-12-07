import React from 'react'
import { Button, Container, Form, Row, Col, Card } from 'react-bootstrap'

const AddPost = () => {
  return (
    <Container>
        <Row xs={1} md={2}>
            <Col>
                <Card className="p-4 m-3">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Add Title Post</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" onChange={this.handleFormChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Add Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default AddPost