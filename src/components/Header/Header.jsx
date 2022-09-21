import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import './../../styles/header.css';

const header = () => {
  const nav_links = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Food",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            {" "}
            <img src={logo} alt="logo" />
            <h5>Tasty Food</h5>
          </div>

          {/*======== menu ==========*/}
          <div className="navigation">
            <div className="menu d-flex gap-5 align-items-center">
              {nav_links.map((item, index) => (
                <NavLink to={item.path} key={index}
                className={navClass => navClass.isActive && "active__menu" }>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======= nav right icons ===== */}
          <div className="nav__right menu d-flex gap-3 align-items-center">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>{" "}
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default header;
