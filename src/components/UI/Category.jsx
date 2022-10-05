import React from "react";
import categoryImage01 from "../../assets/images/category-01.png";
import categoryImage02 from "../../assets/images/category-02.png";
import categoryImage03 from "../../assets/images/category-03.png";
import categoryImage04 from "../../assets/images/category-04.png";
import { Container, Col, Row } from "reactstrap";
import '../../styles/category.css'

const categoryImages = [
  {
    display: "Fast Food",
    imageUrl: categoryImage01,
  },
  {
    display: "Pizza",
    imageUrl: categoryImage02,
  },
  {
    display: "Asian Food",
    imageUrl: categoryImage03,
  },
  {
    display: "Row Meat",
    imageUrl: categoryImage04,
  },
];
const Category = () => {
  return (
    <Container>
      <Row>
        {categoryImages.map((category) => (
          <Col lg="3" md="4">
            <div className="category d-flex align-items-center gap-3">
              <div className="category__item">
                <img src={category.imageUrl} alt={"category_image"} />
              </div>
              <h6 className="category_display">{category.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
