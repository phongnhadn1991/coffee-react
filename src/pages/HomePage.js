import React from 'react';
import ListCategory from '../components/category/ListCategory';
import { ListProduct } from '../components/products/ListProduct';

const Homepage = (props) => {
    return (
        <div className='l-homepage'>
            <div className='container'>
                <div className='c-product'>
                    <div className="c-title_box">
                        <h2><i className="bi bi-balloon-heart"></i> Sản phẩm nhà làm</h2>
                    </div>
                    <ListCategory />
                    <ListProduct />
                </div>
            </div>
        </div>
    );
}

export default Homepage;