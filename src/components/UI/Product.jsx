import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/product.css';

const Product = (props) => {
     const {id, title, price, image01} = props.item
    return (
        <div className='product__item'>
            <div className='product__img'>
                <img src={image01} alt="product_img" className='w-50'></img>
            </div>
            <div className='product_detail'>
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>Rs {price}</span>
                    <button className='addToCart'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;