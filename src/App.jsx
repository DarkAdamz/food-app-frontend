import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/Order/PlaceOrder";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import LoginPopUp from "./components/LoginPopup/LoginPopUp";

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
            <div className="app">
                <ToastContainer />
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    {/* TO CREATE MULTIPLE ROUTES */}
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
