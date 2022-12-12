import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemProduct from '../ItemProduct';
import './style.scss'
import { selectProductFilter, fetchDataProduct } from '../../../features/product/productSlice';

export const ListProduct = (props) => {
    const listProduct = useSelector(selectProductFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataProduct())
    }, [])


    return (
        <div className='p-listPro'>
            {listProduct && listProduct.length > 0 && listProduct.map(item =>
                (<ItemProduct key={item.id} product={item} />)
            )}
        </div>
    );
}