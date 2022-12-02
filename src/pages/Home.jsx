import React, { useState } from "react";
import Helmet from "../components/Helmet/helmet";
import { Row, Col, Container } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category";
import products from "../assets/fake-data/products";
import Product from "../components/UI/Product";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import { useEffect } from "react";
import testimonal from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/TestimonialSlider";


const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    let filteredProducts;

    if (category === "ALL") {
      filteredProducts = products;
    }
    if (category === "Burger") {
      filteredProducts = products.filter(
        (product) => product.category === "Burger"
      );
    }

    if (category === "Pizza") {
      filteredProducts = products.filter(
        (product) => product.category === "Pizza"
      );
    }

    if (category === "Bread") {
      filteredProducts = products.filter(
        (product) => product.category === "Bread"
      );
    }

    setAllProducts(filteredProducts);
  }, [category, allProducts, setAllProducts, setCategory]);
  return (
    <Helmet title="home">
      <section>
        <Container style={{ marginTop: "100px" }}>
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
                    <Link to={"./foods"}>See all foods</Link>
                  </button>
                </div>
              </div>
              <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>{" "}
                  No shipping charge
                </p>

                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__content">
                <img src={heroImg} alt="hero-img" className="w-75"></img>
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
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <Product item={item} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5>Testimonal</h5>
              </div>
              <h6 className="testimonial_text">
                What our customers are saying
              </h6>
              <div>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={testimonal} alt="testimonal_img" className="w-75" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
