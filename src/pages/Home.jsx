import React from "react";
import Helmet from "../components/Helmet/helmet";
import { Row, Col, Container } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import AllFood from "./AllFood";

const Home = () => {
  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5>Easy way to make an order</h5>
                <h1>
                  <span className="hungry">Hungry?</span> just wait for your
                  food at<span className="your__door"> your door</span>
                </h1>
              </div>
              <div className="order__buttons d-flex align-items-center gap-5">
                <div className="order__now">
                  {" "}
                  <button className="order">Order Now</button>
                </div>
                <div className="all__food" >
                  <button className="all__food__button">
                    <Link to={"./allFood"}>See all foods</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__content">
                <img src={heroImg} alt="hero-img" className="w-100"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
