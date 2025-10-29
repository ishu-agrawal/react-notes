import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className="navItems">
                <ul>
                    <li className="online-status">Online Status: {onlineStatus ? '🟢': '🔴'}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login"
                        onClick={() => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                        }}
                        >
                        {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
