import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./cartItem";
import "../../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceUiActions } from "../../../store/cartSliceUi";

const Cart = () => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartSliceUiActions.toggleCartVisibility());
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalPrice);
  console.log("toral", totalAmount)
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cartItems.length === 0 ? (
            <h6>No items are added in the cart</h6>
          ) : (
            cartItems.map((item, index) => <CartItem item={item} key={index} />)
          )}
        </div>
        <div className="cart__bottom">
          <h6>
            Subtotal amount: <span>Rs{totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
