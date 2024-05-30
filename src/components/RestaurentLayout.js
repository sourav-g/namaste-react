import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTAURENT_FETCH_URL } from "../utils/constants";
import RestaurentCard, { withDiscountLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";

const RestaurentLayout = () => {
  //Re-renders (trigger a new reconciliation cycle) everytime state variable changes
  //but react updates only the necessary part of UI

  //* React Fiber -> New reconciliation process/algorithm to efficiently manipulate the DOM

  let [restroList, setRestroList] = useState([]);
  let [filteredRestroList, setFilteredRestroList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    let data = await fetch(RESTAURENT_FETCH_URL);
    data = await data.json();
    let cards = data.data.cards;
    cards = cards.filter(
      (card) =>
        card.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
    );
    setRestroList(
      cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestroList(
      cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const showTopRatedRestaurents = () => {
    filteredRestroList = restroList.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setFilteredRestroList(filteredRestroList);
  };

  /*
      -> if no dependency array => useEffect is called on every render
      -> if dependency array is empty [] => useEffect is called on initial render only (only once)   
      -> if dependency array has values => useEffect is called everytime the dependency gets updated
  */

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurentCardDiscount = withDiscountLabel(RestaurentCard);

  return filteredRestroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex pt-10">
        <input
          type="text"
          className="border-gray border-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="ml-5 px-5 py-1 rounded-lg bg-black text-white"
          onClick={() => {
            filteredRestroList = restroList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestroList(filteredRestroList);
          }}
        >
          Search
        </button>
        <button
          className="ml-5 px-5 py-1 rounded-lg bg-black text-white"
          onClick={showTopRatedRestaurents}
        >
          Top Rated Restaurants
        </button>
        <button
          className="ml-5 px-5 py-1 rounded-lg bg-black text-white"
          style={{ border: "1px solid red" }}
          onClick={() => {
            setFilteredRestroList(restroList);
          }}
        >
          Clear Filters
        </button>
      </div>
      <div className="pt-10 flex flex-wrap">
        {filteredRestroList.map((restro) => {
          return (
            <Link
              key={restro.info.id}
              to={"/restaurent/" + restro.info.id}
              style={{ textDecoration: "none" }}
            >
              {restro.info.aggregatedDiscountInfoV3?.discountTag ? (
                <RestaurentCardDiscount info={restro.info} />
              ) : (
                <RestaurentCard info={restro.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentLayout;
