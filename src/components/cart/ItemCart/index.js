import { useDispatch } from 'react-redux'
import { formatPrice } from '../../../mixins/formatPrice'
import { deleteItemCart, plusQty, minusQty } from '../../../features/cart/cartSlice'
import './style.scss'

const ItemCart = (props) => {
    const { id, title, price, srcImg, qty } = props.product
    const dispatch = useDispatch()

    return (
        <div className="item_cart d-flex justify-content-between align-items-center mt-2 p-2 items rounded border-bottom">
            <div className="d-flex flex-row">
                <img className="rounded" src={srcImg} alt={title} />
                <div className="ms-2 font-size-14">
                    <span className="fw-bold d-block">{title}</span>
                    <span className="spec">Size: nhỏ</span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div className="d-block font-size-14 qty_content no-select">
                    <span onClick={() => dispatch(minusQty(id))}><i className="bi bi-dash-square-fill" /></span>
                    <span className="qty_num">{qty}</span>
                    <span onClick={() => dispatch(plusQty(id))}><i className="bi bi-plus-square-fill" /></span>
                </div>
                <span className="d-block font-size-14 ms-3 price_num no-select">{formatPrice(price)}</span>
                <span className="d-block font-size-14 ms-3 fw-bold subtotal_num no-select">{formatPrice(price * qty)}</span>
                <i className="rm-cart bi bi-trash ms-3 text-black-50 no-select" onClick={() => dispatch(deleteItemCart(id))} />
            </div>
        </div >

    )
}

export default ItemCart
