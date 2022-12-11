import './style.scss'

const Footer = (props) => {
    return (
        <div className="c-footer">
            <div className="container">
                <div className="box_wrap">
                    <div className="box_left">© 2023 MCN - Mai Công Ngoãn.</div>
                    <div className="box_right">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">Features</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;