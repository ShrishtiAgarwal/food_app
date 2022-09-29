import React from "react";
import { Row, Col, Container, ListGroup, List, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";


const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
          <div className="logo">
            {" "}
            <img src={logo} alt="logo" />
            <h5>Tasty Food</h5>
          </div>
            </Col>
          <Col lg="3" md="4" sm="6"></Col>
          <Col lg="3" md="4" sm="6"></Col>
          <Col lg="3" md="4" sm="6"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
