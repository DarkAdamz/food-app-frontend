import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext";
import {useNavigate} from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const {cartItems, food_list, getTotalCartAmount, removefromCart, url} = useContext(StoreContext);
    const navigate = useNavigate();
    let DeliveryFee = 0;
    if (getTotalCartAmount() === 0) {
        DeliveryFee = 0;
    } else {
        DeliveryFee = 10;
    }
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div key={index} className="cart-items-title cart-items-item">
                                    <img src={url + "/images/" + item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p
                                        onClick={() => {
                                            removefromCart(item._id);
                                        }}
                                        className="cross"
                                    >
                                        x
                                    </p>
                                </div>
                                <hr />
                            </>
                        );
                    }
                })}
            </div>
            <div className="cart-buttom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>$ {DeliveryFee}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>$ {getTotalCartAmount() + DeliveryFee}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>PROCEED TO CHECK OUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here: </p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Enter Promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
