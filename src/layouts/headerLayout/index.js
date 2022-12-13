import { Avatar } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthUser, selectAuthencation, selectAuthUser } from "../../features/auth/authSlice";
import { selectListCart } from "../../features/cart/cartSlice";
import './style.scss'

const HeaderLayout = () => {
    const [isShow, setIsShow] = useState(false)
    const listCart = useSelector(selectListCart)

    const dispatch = useDispatch()
    const sateAuthencation = useSelector(selectAuthencation)
    const sateAuthUser = useSelector(selectAuthUser)

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
                            <li><Link to={'/news'}>Tin tức & khuyến mãi</Link></li>
                            <li><Link to={'/'}>Liên hệ</Link></li>
                        </nav>
                    </div>
                    <div className="block-button">
                        <ul>
                            <li>
                                <a href='http://#' className="btn_login cursor-pointer" onClick={(e) => { e.preventDefault(); setIsShow(!isShow) }}>
                                    {sateAuthencation && sateAuthUser && (
                                        <Avatar size={40} src={sateAuthUser.uphotoURL} />
                                    )}
                                    {!sateAuthencation && (
                                        <i className="bi bi-person" />
                                    )}
                                </a>
                            </li>
                            <li>
                                <Link className="btn_cart position-relative cursor-pointer" to={'/cart'}>
                                    <i className="bi bi-bag" />
                                    <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                                        {listCart.length}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        {isShow && (
                            <div className="box_action_user">
                                <i className="btn_close bi bi-x-lg" onClick={() => setIsShow(!isShow)}></i>
                                {!sateAuthencation && (
                                    <Link to={'/login'} onClick={() => setIsShow(!isShow)}>
                                        <span>Đăng nhập</span>
                                    </Link>
                                )}
                                {sateAuthencation && (
                                    <Link to={'/login'} className="btn_login cursor-pointer" onClick={() => {localStorage.clear(); dispatch(logoutAuthUser()); setIsShow(!isShow) }}>
                                        <span>Đăng xuất</span>
                                    </Link>
                                )}

                                <a href="http://">
                                    <span>Tra cứu đơn hàng</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header >
    )
}

export default HeaderLayout