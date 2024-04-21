import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RESTAURENT_MENU_FETCH_URL,
  MENU_IMAGE_CDN_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

const RestaurentMenu = () => {
  let [resInfo, setResInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      RESTAURENT_MENU_FETCH_URL + "restaurantId=" + params.resId
    );
    let json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards;

  return (
    <div className="res-menu">
      <h3>{name}</h3>
      <p>
        {areaName} - {costForTwoMessage}
      </p>
      <p>{cuisines.join(", ")}</p>

      <h2>********* Menu **********</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li>
              {item.card.info.name} - {"Rs. " + item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
