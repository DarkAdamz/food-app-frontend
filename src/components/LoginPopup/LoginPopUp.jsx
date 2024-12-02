import {useContext, useState} from "react";
import "./LoginPopUp.css";
import PropTypes from "prop-types";
import axios from "axios";
import {assets} from "../../assets/assets";
import {StoreContext} from "../../context/StoreContext";
import {toast} from "react-toastify";

const LoginPopUp = ({setShowLogin}) => {
    const {url, setToken} = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign-up"); //Login || Sign-up
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata((data) => ({...data, [name]: value}));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
            toast.success(response.data.message);
            //alert(response.data.message);
        } else {
            toast.error(response.data.message);
            //alert(response.data.message);
        }
    };

    return (
        <div className="login-pop">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? (
                        <></>
                    ) : (
                        <input
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder="your name"
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        placeholder="your email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        placeholder="password"
                        required
                    />
                </div>
                <button type="submit">{currState === "Sign-up" ? "Create Account" : "Log In"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?<span onClick={() => setCurrState("Sign Up")}> Click here</span>
                    </p>
                ) : (
                    <p onClick={() => setCurrState("Login")}>
                        Already have an account?<span> Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

LoginPopUp.propTypes = {
    setShowLogin: PropTypes.func,
};

export default LoginPopUp;
