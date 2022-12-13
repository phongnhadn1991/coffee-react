import React, { useEffect, useState } from 'react';
import { Avatar, Alert, Col, Row } from 'antd';

import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { loginAuthUser, selectAuthencation, selectAuthUser } from '../features/auth/authSlice';

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(null)
    const handleGoogle = () => {
        signInWithPopup(auth, provider).then((data) => {
            const payload = {
                uid: data.user.uid,
                uemail: data.user.email,
                uphotoURL: data.user.photoURL,
            }
            setValue(payload)
            dispatch(loginAuthUser(payload))
        })
    }


    const sateAuthencation = useSelector(selectAuthencation)
    const sateAuthUser = useSelector(selectAuthUser)

    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])

    return (
        <>
            {sateAuthencation && sateAuthUser && (
                <div className='container mt-5'>
                    <Row>
                        <Col span={3}>
                            <Avatar size={100} src={sateAuthUser.uphotoURL} />
                        </Col>
                        <Col span={21}>
                            <Alert
                                message="Đăng nhập thành công"
                                description={`Email: ${sateAuthUser.uemail} | uid: ${sateAuthUser.uid}`}
                                type="success"
                                showIcon
                            />
                        </Col>
                    </Row>


                </div>
            )}
            {!sateAuthencation && (
                <div className='l-loginPage'>
                    <div className='container'>
                        <div className="pt-5 w-75 mx-auto">
                            <section className={value}>
                                <div className="container-fluid h-custom">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-md-9 col-lg-6 col-xl-5">
                                            <img src="./images/login.webp" className="img-fluid" alt="bground" />
                                        </div>
                                        <div className="col-md-8 col-lg-6 col-xl-5">
                                            <form>
                                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                    <p className="lead fw-normal mb-0 me-3">Đăng nhập với</p>
                                                    <button onClick={handleGoogle} type="button" className="btn btn-primary btn-floating mx-1">
                                                        <i className="bi bi-google" />
                                                    </button>
                                                    <button type="button" className="btn btn-primary btn-floating mx-1" disabled>
                                                        <i className="bi bi-facebook" />
                                                    </button>
                                                </div>
                                                <div className='my-4'>
                                                    <Alert message="Chỉ đăng nhập với google" type="info" showIcon />
                                                </div>
                                                {/* <div className="divider d-flex align-items-center my-4">
                                                    <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
                                                </div> */}
                                                {/* Email input */}
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form3Example3" className="form-control form-control-md" placeholder="Tên đăng nhập" disabled />
                                                </div>
                                                {/* Password input */}
                                                <div className="form-outline mb-3">
                                                    <input type="password" id="form3Example4" className="form-control form-control-md display-3" placeholder="Mật khẩu" disabled />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    {/* Checkbox */}
                                                    <div className="form-check mb-0">
                                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" disabled/>
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            Lưu đăng nhập
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="text-body">Quên mật khẩu?</a>
                                                </div>
                                                <div className="text-center text-lg-start mt-4 pt-2">
                                                    <button type="button" className="btn btn-primary btn-md" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} disabled>Đăng nhập</button>
                                                    <p className="small fw-bold mt-2 pt-1 mb-0">Nếu chưa có tài khoản? <a href="#!" className="link-danger">Tạo tài khoản mới</a></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default LoginPage;