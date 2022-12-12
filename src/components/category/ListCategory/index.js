import React, { useEffect, useState } from 'react';
import './style.scss'
import { selectListCategory, filterCategory } from '../../../features/category/categorySlice';
import { useDispatch, useSelector } from 'react-redux';

const ListCategory = (props) => {
    const listCategory = useSelector(selectListCategory)
    const [listCate] = useState(listCategory)
    const dispatch = useDispatch()
    const [currentActive, setCurrentActive] = useState(1)

    useEffect(() => {
        dispatch(filterCategory(1))
    }, [dispatch])

    return (
        <div className='product__category'>
            {listCate && listCate.length && listCate.map(item => (
                <div key={item.id} className={`item ${item.id === currentActive ? 'active' : ''}`} onClick={() => {dispatch(filterCategory(item.id)); setCurrentActive(item.id) }}>
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