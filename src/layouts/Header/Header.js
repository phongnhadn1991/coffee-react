import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {
    return (
        <header className="c-header">
            <div className="container">
                <div className="box_wrap align-items-center">
                    <div className="c-header__logo">
                        <Link to={'/'}><img src="./images/logo.svg" alt="Logo" /></Link>
                    </div>
                    <div className="c-header__nav">
                        <nav>
                            <li><Link to={'/'}>Trang Chủ</Link></li>
                            <li><Link to={'/products'}>Sản phẩm</Link></li>
                            <li><Link to={'/news'}>Tin tức</Link></li>
                        </nav>
                    </div>
                    <div className="block-button">
                        <ul>
                            <li>
                                <a href='http' className="btn_login cursor-pointer">
                                    <i className="bi bi-person" />
                                </a>
                            </li>
                            <li>
                                <a href='http' className="btn_cart position-relative cursor-pointer">
                                    <i className="bi bi-bag" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header