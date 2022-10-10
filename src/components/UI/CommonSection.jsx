import React from "react";
import { Container } from "reactstrap";
import '../../styles/common-section.css'

const CommonSection = (props) => {
  return (
    <section className="common_section">
      <Container style={{ marginTop: "100px" }}>
        <h2 className="title">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
