import React, { useEffect, useState } from 'react';
import './style.scss'
import { selectListCategory, filterCategory } from '../../../features/category/categorySlice';
import { useDispatch, useSelector } from 'react-redux';

const ListCategory = (props) => {
    const listCategory = useSelector(selectListCategory)
    const [listCate, setListCate] = useState(listCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterCategory(1))
    }, [])

    return (
        <div className='product__category'>
            {listCate && listCate.length && listCate.map(item => (
                <div key={item.id} className='item' onClick={() => dispatch(filterCategory(item.id))}>
                    <div className='item__thumb'>
                        <img src={item.srcImg} alt={item.name} />
                    </div>
                    <div className='item__text'>
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListCategory;