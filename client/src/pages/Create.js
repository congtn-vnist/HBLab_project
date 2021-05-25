import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
function Create() {
  return (
    <div className="create">
      <Container fluid>
        <div style={{ fontSize: '14px' }}>
          <div
            className="border border-dark py-3 px-5"
            style={{ minHeight: '75vh' }}
          >
            <Form style={{ color: '#545454' }}>
              <div className="d-flex justify-content-between">
                <h3>Create request</h3>
                <Button variant="success">Create</Button>
              </div>
              <div className="my-4">
                <Form.Control type="text" placeholder="Title" />
              </div>
              <div
                className="px-4 py-3 mb-4"
                style={{ border: '1px solid #ced4da' }}
              >
                <Form.Control
                  placeholder="Add a description"
                  as="textarea"
                  rows={4}
                />
                <div className="mt-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    <p style={{ minWidth: '90px' }}>Status:</p>
                    <p>Open</p>
                  </div>
                  <Form.Group className="d-flex flex-row align-items-center">
                    <Form.Label style={{ minWidth: '90px' }} className="">
                      Assign
                    </Form.Label>
                    <Form.Control as="select" style={{ minWidth: '200px' }}>
                      <option value="no-value">1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Form.Group className="d-flex flex-row align-items-center">
                  <Form.Label style={{ minWidth: '90px' }} className="">
                    Category
                  </Form.Label>
                  <Form.Control
                    as="select"
                    style={{ width: '200px', maxWidth: '100%' }}
                  >
                    <option value="no-value">1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Create;
