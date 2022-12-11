import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.scss'
import { formatPrice } from '../../../mixins/formatPrice';
import { addToCart } from '../../../features/product/productSlice';
import { useDispatch } from 'react-redux';


function ItemProduct(props) {
    const {id,title,price,srcImg,categoryId} = props.product
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
                        <Button onClick={() => dispatch(addToCart(id))} type="primary" icon={<PlusOutlined />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;