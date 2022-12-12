import React, { useEffect } from 'react';
import ListCategory from '../components/category/ListCategory';
import { ListProduct } from '../components/products/ListProduct';

const ProductPage = (props) => {
    useEffect(() => {
        document.title = 'Sản phẩm'
    }, [])
    return (
        <div className='l-productPage'>
            <div className='container'>
                <div className='c-product mt-5 mb-5'>
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

export default ProductPage;