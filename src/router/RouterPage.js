import React, { memo, useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import CartPage from "../pages/CartPage";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";
import ProductPage from "../pages/ProductPage";

const RouterPage = () => {
    const mainPageRef = useRef()
    const location = useLocation()
    return (
        <div ref={mainPageRef} className="main-page">
            <div className="container-full">
                <Routes>
                    <Route location={location} key={location.pathname} >
                        <Route index element={<Homepage />} />
                        <Route path='/products' element={<ProductPage />} />
                        <Route path='/news' element={<NewsPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default memo(RouterPage)