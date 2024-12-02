import "./ExploreMenu.css";
import {menu_list} from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-meunu-text">
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                cravings and take your dining experience to another level one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory((prev) => (prev === " " ? "All" : item.menu_name))}
                            key={index}
                            className="explore-menu-list-items"
                        >
                            <img
                                className={category === item.menu_name ? "active" : " "}
                                src={item.menu_image}
                                alt="menu-list"
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
