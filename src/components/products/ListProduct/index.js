import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemProduct from '../ItemProduct';
import './style.scss'
import { selectListProduct, selectProductFilter } from '../../../features/product/productSlice';

export const ListProduct = (props) => {
    const listProduct = useSelector(selectProductFilter)
    const [listPro, setListPro] = useState(listProduct)

    return (
        <div className='p-listPro'>
            {listProduct && listProduct.length > 0 && listProduct.map(item =>
                (<ItemProduct key={item.id} product={item} />)
            )}
        </div>
    );
}