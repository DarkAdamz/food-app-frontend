import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {assets} from "../../assets/assets";
import "./Navbar.css";
import {StoreContext} from "../../context/StoreContext";
import {toast} from "react-toastify";
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Menu");
    const navigate = useNavigate();
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        toast.success("See you next time! 👋");
    };
    return (
        <div className="navbar">
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="logo" />
            </Link>
            <ul className="navbar-menu">
                <Link
                    to="/"
                    onClick={() => {
                        setMenu("Home");
                    }}
                    className={menu === "Home" ? "active" : " "}
                >
                    Home
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => {
                        setMenu("Menu");
                    }}
                    className={menu === "Menu" ? "active" : ""}
                >
                    Menu
                </a>
                <a
                    href="#app-download"
                    onClick={() => {
                        setMenu("Mobile-app");
                    }}
                    className={menu === "Mobile-app" ? "active" : ""}
                >
                    Mobile App
                </a>
                <a
                    href="#footer"
                    onClick={() => {
                        setMenu("Contact");
                    }}
                    className={menu === "Contact" ? "active" : ""}
                >
                    Contact Us
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="" />
                        <div className={getTotalCartAmount() ? "dot" : ""}></div>
                    </Link>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} />
                        <ul className="nav-profile-dropdown">
                            <li>
                                <img src={assets.bag_icon} />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} />
                                <p>Log Out</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

Navbar.propTypes = {
    setShowLogin: PropTypes.func,
};

export default Navbar;
