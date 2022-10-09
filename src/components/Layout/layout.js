import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers';
import Cart from '../UI/cart/cart';
import { useSelector } from 'react-redux';

const Layout = () => {
    const isCartVisible = useSelector(state => state.cartUi.carIsVisible)
    return (
        <div>
        <Header/>
        {isCartVisible && <Cart/>}
        <div>
            <Routes/>
        </div>
        <Footer/>
        </div>
    );
};

export default Layout;