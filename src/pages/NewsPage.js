import React, { useEffect } from 'react';
import ListNews from '../components/news/ListNews';

const NewsPage = (props) => {
    useEffect(() => {
        document.title = 'Tin tức'
    }, [])
    return (
        <div className='l-newsPage'>
            <div className='container'>
                <ListNews />
            </div>
        </div>
    );
}

export default NewsPage;