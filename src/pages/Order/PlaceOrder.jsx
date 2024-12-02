import {useContext} from "react";
import "./placeOrder.css";
import {StoreContext} from "../../context/StoreContext";
const placeOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
    let DeliveryFee = 0;
    if (getTotalCartAmount() === 0) {
        DeliveryFee = 0;
    } else {
        DeliveryFee = 10;
    }
    return (
        <div>
            <form className="place-order">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Street" />

                    <div className="multi-fields">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Zip Code" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <input type="text" placeholder="Phone" />
                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>{DeliveryFee}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${getTotalCartAmount() + DeliveryFee}</b>
                            </div>
                        </div>
                        <button>PROCEED PAYMENT</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default placeOrder;
