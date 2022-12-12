import { useState } from 'react';
import './SlideHomePage.scss'

const SlideHomePage = (props) => {

    const listSlide = [
        { srcImg: './images/banner_1.jpg' },
        { srcImg: './images/banner_2.jpg' },
        { srcImg: './images/banner_3.jpg' }
    ]

    const [indexSlide, setIndexSlide] = useState(0)
    const nextSlide = (idx) => {
        if (idx > listSlide.length - 1) {
            setIndexSlide(0)
        } else {
            setIndexSlide(idx)
        }
    }
    const prevSlide = (idx) => {
        if (idx < 0) {
            setIndexSlide(listSlide.length - 1)
        } else {
            setIndexSlide(idx)
        }
    }

    return (
        <div className="c-slider">
            <div className="container">
                <div className="box-slider">
                    <div className="slide">
                        {listSlide && listSlide.length > 0 && listSlide.map((item, idx) =>
                            indexSlide === idx &&
                            (
                                <div className="item" key={idx}>
                                    <img src={item.srcImg} alt='banner' />
                                </div>
                            )
                        )
                        }
                    </div>
                    <div className="arrowControl">
                        <button onClick={() => prevSlide(indexSlide - 1)}><i className="bi bi-arrow-left" /></button>
                        <button onClick={() => nextSlide(indexSlide + 1)}><i className="bi bi-arrow-right" /></button>
                    </div>
                    <div className="dotControl">
                        <ul>
                            {listSlide && listSlide.length > 0 && listSlide.map((item, index) => (
                                <li className={indexSlide === index ? 'active' : ''} key={`button-${index}`} onClick={() => setIndexSlide(index)}><button></button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideHomePage;