import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import Helmet from "../components/Helmet/helmet";
import CommonSection from "../components/UI/CommonSection";
import Product from "../components/UI/Product";
import "../styles/all-foods.css";

const AllFood = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <Helmet title={"All Foods"}>
      <CommonSection title={"All Foods"}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for ..."
                  value={searchItem}
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                ></input>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="data_widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {products
              .filter((product) => {
                if (searchItem === "") return product;
                return product.title.toLowerCase().includes(searchItem);
              })
              .map((item) => (
                <Col lg="3" md="4" sm="6" className="mb-4">
                  <Product item={item} key={item.id} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFood;
