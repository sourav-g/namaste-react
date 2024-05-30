import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  let [showIndex, setShowIndex] = useState(null);
  const params = useParams();
  let resInfo = useRestaurentMenu(params.resId);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = cards.filter((card) =>
    card?.card?.card["@type"].includes(".ItemCategory")
  );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lgs">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/*controlled component since sending showItems to show/hide the RestaurentCategory*/}
      {/*passing the feature of setting index to its children*/}
      {categories.map((category, index) => {
        return (
          <RestaurentCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          ></RestaurentCategory>
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
