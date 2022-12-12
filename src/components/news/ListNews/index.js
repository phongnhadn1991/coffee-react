import { useState } from 'react'
import './style.scss'

const ListNews = (props) => {

    const [listNews] = useState([
        { id: 1, title: "MỪNG NHÀ ĐÀ NẴNG LÊN 5 - NGUYỄN CHÍ THANH KHOÁC ÁO MỚI", srcImg: 'images/news/news_1.jpg' },
        { id: 2, title: "ĐẠI TIỆC TRÀ - CÀ PHÊ ĐỒNG GIÁ CHỈ 39K", srcImg: 'images/news/news_2.jpg' },
        { id: 3, title: "TIẾP BƯỚC RÔM RẢ - NHÀ TẶNG LIỀN 15%", srcImg: 'images/news/news_3.jpg' },
        { id: 4, title: "VUI NGÀY HỘI NGỘ - RẦM RỘ DEAL TO", srcImg: 'images/news/news_4.jpg' },
        { id: 5, title: "SÁNG NĂNG LƯỢNG - CÀ PHÊ THÊM TỈNH TÁO CHỈ 19K", srcImg: 'images/news/news_5.jpg' },
        { id: 6, title: "VẪN DEAL ĐỀU ĐẶN - VẪN NHÀ YÊU THƯƠNG", srcImg: 'images/news/news_6.jpg' },
    ])


    return (
        <div className="c-news">
            <div className="container">
                <div className="c-title_box">
                    <h2><i className="bi bi-balloon-heart" /> Tin tức &amp; khuyến mãi</h2>
                </div>
                <div className="box_wrap">
                    <div className="box_list_news">
                        {listNews && listNews.length > 0 && listNews.map(item => {
                            const {id,title,srcImg} = item
                            return (
                                <div className="item" key={id}>
                                    <div className="item__thumb">
                                        <img src={srcImg} alt={title} />
                                    </div>
                                    <div className="item__content">
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="box_footer">
                                            <p className="date_post">Admin | 12/12/2023</p>
                                            <a href={id}>Đọc tiếp</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div >

    )
}

export default ListNews