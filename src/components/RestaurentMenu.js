import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const params = useParams();
  let resInfo = useRestaurentMenu(params.resId);
  if (resInfo === null) return <Shimmer />;

  const { name, areaName, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

  console.log(itemCards);

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
            <li key={item.card.info.id}>
              <MenuItem menuInfo={item.card.info}></MenuItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
