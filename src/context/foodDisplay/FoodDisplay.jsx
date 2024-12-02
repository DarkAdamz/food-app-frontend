import {useContext} from "react";
import "./foodDisplay.css";
import {StoreContext} from "../StoreContext";
import FoodItems from "../foodItem/FoodItems";
// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    return (
        <div className="food-display" id="food-display">
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItems
                                key={index}
                                id={item._id}
                                name={item.name}
                                desc={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
