import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

const header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            {" "}
            <img src={logo} alt="logo" />
            <h5>Tasty Food</h5>
          </div>
          <div className="navigation">
            <div className="menu">
                
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default header;
