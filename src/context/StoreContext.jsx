import {createContext, useEffect, useState} from "react";
//import {food_list} from "../assets/assets";
import PropTypes from "prop-types";
import axios from "axios";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [food_list, setFoodList] = useState([]);
    const [token, setToken] = useState("");
    const addtoCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}));
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
    };
    const removefromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addtoCart,
        removefromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };
    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

StoreContextProvider.propTypes = {
    props: PropTypes.any,
    children: PropTypes.any,
};
export default StoreContextProvider;
