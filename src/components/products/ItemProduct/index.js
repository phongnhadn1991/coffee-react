import React from 'react';
import {  Button   } from 'antd';
import './style.scss'
import { formatPrice } from '../../../mixins/formatPrice';
import { addToCart } from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


function ItemProduct(props) {
    const {title,price,srcImg} = props.product
    const dispatch = useDispatch()

    return (
        <div className='p-itemPro'>
            <div className='p-itemPro_content'>
                <div className='p-itemPro_content-top'>
                    <div className='p-itemPro_thumb'>
                        <img src={srcImg} alt={title} />
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                </div>
                <div className='p-itemPro_content-footer'>
                    <div className='price'>{formatPrice(price)}</div>
                    <div className='box_action'>
                        <Button onClick={() => dispatch(addToCart(props.product))} shape="circle" type="primary" danger ><i className="bi bi-bag-plus"></i></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;