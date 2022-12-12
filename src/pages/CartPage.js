import React, { useEffect } from 'react';
import ListCart from '../components/cart/ListCart';

const CartPage = (props) => {

    useEffect(() => {
        document.title = 'Giỏ hàng'
    }, [])

    return (
        <div className='l-cartPage mt-5'>
            <div className='container'>
                <div className="c-title_box">
                    <h2><i className="bi bi-balloon-heart"></i> Giỏ hàng</h2>
                </div>
                <ListCart />
            </div>
        </div>
    );
}

export default CartPage;