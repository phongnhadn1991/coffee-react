import React from 'react';
import ListCategory from '../components/category/ListCategory';
import SlideHomePage from '../components/pages/homepage/SlideHomePage';
import { ListProduct } from '../components/products/ListProduct';

const Homepage = (props) => {
    return (
        <div className='l-homepage'>
            <SlideHomePage />
            <div className='container'>
                <div className='c-product'>
                    <div className="c-title_box">
                        <h2><i className="bi bi-balloon-heart"></i> Sản phẩm nhà làm</h2>
                    </div>
                    <ListCategory />
                    <ListProduct />
                    <div className="box_button text-center mt-5">
                        <a href="/product" className="btn_showAll">Xem tất cả <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;