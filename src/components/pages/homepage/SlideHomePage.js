import './SlideHomePage.scss'

const SlideHomePage = (props) => {
    return (
        <div className="c-slider">
            <div className="container">
                <div className="box-slider">
                    <div className="slide">
                        <div className="item">
                            <img src='./images/banner_1.jpg' alt='banner' />
                        </div>
                    </div>
                    <div className="arrowControl">
                        <button ><i className="bi bi-arrow-left" /></button>
                        <button ><i className="bi bi-arrow-right" /></button>
                    </div>
                    <div className="dotControl">
                        <ul>
                            <li><button></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideHomePage;