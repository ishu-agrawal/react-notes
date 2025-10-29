import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header flex justify-between shadow-lg m-2">
            <div className="logo-container flex items-center">
                <img className='logo w-20' src={LOGO_URL} />
            </div>
            <div className="navItems">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? '🟢': '🔴'}</li>
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/about'>About Us</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">
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
