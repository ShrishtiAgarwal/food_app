import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/helmet";
import { Row, Container, Col } from "reactstrap";
import productImg from "../assets/images/product_01.jpg";

const FoodDetails = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="product-01" />
      <section>
        <Container>
          <Row>
            <Col lg="2" sm="2">
              <div>
                <div>
                  <img src={productImg} alt="" className="w-50"></img>
                </div>
                <div>
                  <img src={productImg} alt="" className="w-50"></img>
                </div>
                <div>
                  <img src={productImg} alt="" className="w-50"></img>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="4">
              <div>
                <div>
                  <img src={productImg} alt="" className="w-100"></img>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product-title">Burger with mushroom</h2>
                <span className="product-price">evevde</span>
                <p>Category: <span>burger</span></p>
                <button className="btn addTOCart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div>
                <h6>Description</h6>
              </div>
              <div>
                <p>dvs vdfa</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
