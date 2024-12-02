import {useContext} from "react";
import {assets} from "../../assets/assets";
import PropTypes from "prop-types";
import "./FoodItems.css";
import {StoreContext} from "../StoreContext";

const FoodItems = ({id, name, price, desc, image}) => {
    //const [itemCount, setItemCount] = useState(0);
    const {cartItems, addtoCart, removefromCart, url} = useContext(StoreContext);
    return (
        <div className="food-item" key={id}>
            <div className="food-item-img-container">
                <img className="food-item-img" src={url + "/images/" + image} />
                {!cartItems[id] ? (
                    <img className="add" onClick={() => addtoCart(id)} src={assets.add_icon_white} alt="add-icon" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={() => removefromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addtoCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating-stars" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};
FoodItems.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    image: PropTypes.string,
};

export default FoodItems;
