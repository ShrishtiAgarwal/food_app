import React from 'react';
import productImg from '../../assets/images/product_2.1.jpg';
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div>
                <img src={productImg} alt="product_img"></img>
            </div>
            <div className='product_detail'>
                <h5><Link>Burger</Link></h5>
                <div>
                    <span className='product__price'>Rs 39</span>
                    <button className='addToCart'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;