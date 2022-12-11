import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="c-header">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/products'}>Product</Link></li>
            </ul>
        </header>
    )
}