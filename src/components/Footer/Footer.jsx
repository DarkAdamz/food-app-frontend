import {assets} from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} />
                    <p>
                        Be sure to experience a change in your standards and definition of exqusite dining by trying out
                        some of your best dishes. You can also share the love with family and friends at home as
                        delivery is available. Please note that the delivery cost and diposable plate are seperate.
                    </p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="facebook icon" />
                        <img src={assets.twitter_icon} alt="Twitter icon" />
                        <img src={assets.linkedin_icon} alt="Linked  icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li>0817348239</li>
                        <li>foodapp@delivery.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright 2024 &copy; FoodApp - All Right Reserved </p>
        </div>
    );
};

export default Footer;
