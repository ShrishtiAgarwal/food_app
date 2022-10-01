import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              {" "}
              <img src={logo} alt="logo" />
              <h5>Tasty Food</h5>
              <p>
                This is the tastiest food you could get. India's proven number 1
                website
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h4>Delivery Time</h4>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h4>Contact</h4>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: Banglore</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone No: 7289069616</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: shrishtiagarwal21@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h4>NewsLetter</h4>
            <p>Subscribe to our letter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email"></input>
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Shrishti Agarwal. All rights are
              reserved{" "}
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex gap-3 justify-content-end">
              <p>Follow: </p>
              <span>
                <a
                  href="https://www.linkedin.com/in/shrishti-agarwal-35877a149/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://github.com/ShrishtiAgarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
