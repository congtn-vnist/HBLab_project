import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './List'
function Update() {

  const handleClick = () => {
    
  }

  return (
    <div className="create">
      <Container fluid>
        <div style={{ fontSize: "14px" }}>
          <div
            className="border border-dark py-3 px-5"
            style={{ minHeight: "75vh" }}
          >
            <Form style={{ color: "#545454" }}>
              <div className="d-flex justify-content-between">
                <h3>Update request</h3>
                <Button variant="success" onClick={handleClick}>
                  Update
                </Button>
              </div>
              <div className="my-4">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  defaultValue="Valerie Marco CEO"
                />
              </div>
              <div
                className="px-4 py-3 mb-4"
                style={{ border: "1px solid #ced4da" }}
              >
                <Form.Control
                  placeholder="Add a description"
                  as="textarea"
                  rows={4}
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <div className="mt-3 d-flex justify-content-between align-items-center">
                  <Form.Group className="d-flex flex-row align-items-center">
                    <Form.Label style={{ minWidth: "90px" }} className="">
                      Status
                    </Form.Label>
                    <Form.Control as="select" style={{ minWidth: "200px" }}>
                      <option value="no-value">Status 1</option>
                      <option>Status 2</option>
                      <option>Status 3</option>
                      <option selected>Status 4</option>
                      <option>Status 5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="d-flex flex-row align-items-center">
                    <Form.Label style={{ minWidth: "90px" }} className="">
                      Assign
                    </Form.Label>
                    <Form.Control as="select" style={{ minWidth: "200px" }}>
                      <option value="no-value">Assign 1</option>
                      <option>Assign 2</option>
                      <option>Assign 3</option>
                      <option>Assign 4</option>
                      <option selected>Assign 5</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Form.Group className="d-flex flex-row align-items-center">
                  <Form.Label style={{ minWidth: "90px" }} className="">
                    Category
                  </Form.Label>
                  <Form.Control
                    as="select"
                    style={{ width: "200px", maxWidth: "100%" }}
                  >
                    <option value="no-value">Category 1</option>
                    <option selected>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
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

export default Update;
