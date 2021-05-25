import React from 'react';
import History from '../components/History';
import { Container, Row, Col } from 'react-bootstrap';
import ListRequests from '../components/ListRequests';

function List() {
  return (
    <div className="list">
      <Container fluid>
        <Row>
          <Col xs={9}>
            <ListRequests />
          </Col>
          <Col xs={3}>
            <History />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default List;
