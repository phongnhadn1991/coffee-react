import { useSelector } from 'react-redux'
import { formatPrice } from '../../../mixins/formatPrice'
import { selectListCart, selectSubToTalCart } from '../../../features/cart/cartSlice'
import ItemCart from '../ItemCart'
import './style.scss'
import { useState } from 'react'

const ListCart = (props) => {

    const listCartSelector = useSelector(selectListCart)
    const subToTalCartSelector = useSelector(selectSubToTalCart)

    const [feeShip] = useState(0)

    const priceFreeShip = (priceSubToTal) => {
        return priceSubToTal < 100000 ? (100000 - priceSubToTal) : 0
    }

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title border-bottom">
                        <div className="row">
                            <div className="col">
                                <h4><b>Giỏ hàng</b></h4>
                            </div>
                            <div className="col align-self-center text-right text-muted">
                                {listCartSelector.length > 0 ? listCartSelector.length : 0} sản phẩm
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            listCartSelector && listCartSelector.length > 0 && listCartSelector.map(item => (
                                <ItemCart key={item.id} product={item} />
                            ))
                        }
                        {
                            listCartSelector && listCartSelector.length === 0 && (
                                <div className="alert alert-warning text-center" role="alert">
                                    Chưa có sản phẩm nào trong giỏ hàng !
                                </div>
                            )
                        }

                    </div>
                    <div className="back-to-shop">
                        <a href="http://">← <span className="text-muted">Tiếp tục mua hàng</span></a>
                    </div>
                </div>
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Đơn hàng</b></h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>
                            {listCartSelector.length > 0 ? listCartSelector.length : 0} Sản phẩm
                        </div>
                        <div className="col text-right">{formatPrice(subToTalCartSelector)}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col" style={{ paddingLeft: 0 }}>Vận chuyển</p>
                        <p className="col text-right">
                            {subToTalCartSelector > 100000 ? (feeShip === 0 ? 'Miễn phí' : feeShip) : (subToTalCartSelector > 0 && subToTalCartSelector < 100000 ? formatPrice(15000) : formatPrice(0))}
                        </p>
                    </div>
                    {subToTalCartSelector > 0 && subToTalCartSelector < 100000 &&
                        (
                            <div className="row">
                                <p className="col font-size-13" style={{ padding: 0 }}>Đặt thêm <span className="fw-bold">{formatPrice(priceFreeShip(subToTalCartSelector))}</span> để được miễn phí vận chuyển</p>
                            </div>
                        )
                    }
                    <div className="row" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', padding: '2vh 0' }}>
                        <div className="col" style={{ paddingLeft: 0 }}>Tổng tiền</div>
                        <div className="col text-right">{formatPrice(subToTalCartSelector + (subToTalCartSelector === 0 || subToTalCartSelector > 100000 ? 0 : 15000))}</div>
                    </div>
                    <a className='btn_checkout' href="http://">THANH TOÁN</a>
                </div>
            </div>
        </div>
    )
}

export default ListCart
