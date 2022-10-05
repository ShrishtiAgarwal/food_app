import React, { useState } from "react";
import Helmet from "../components/Helmet/helmet";
import { Row, Col, Container } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

const Home = () => {
  const [category, setCategory] = useState("ALL");

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
                <div className="all__food">
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
      <section>
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex gap-5">
                <button
                  className={` ${category === "ALL" ? "foodButtonActive" : ""}`}
                  onClick={() => {
                    setCategory("ALL");
                  }}
                >
                  {/* <img src={foodCategoryImg01} alt="" /> */}
                  ALL
                </button>
                <button
                  className={` ${
                    category === "Burger" ? "foodButtonActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("Burger");
                  }}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={` ${
                    category === "Pizza" ? "foodButtonActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("Pizza");
                  }}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={` ${
                    category === "Bread" ? "foodButtonActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("Bread");
                  }}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
