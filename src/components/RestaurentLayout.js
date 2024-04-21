import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTAURENT_FETCH_URL } from "../utils/constants";
import RestaurentCard from "./RestaurentCard";
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

  return filteredRestroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filters">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btn search-btn"
          onClick={() => {
            filteredRestroList = restro_list.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestroList(filteredRestroList);
          }}
        >
          Search
        </button>
        <button className="btn top-rated-btn" onClick={showTopRatedRestaurents}>
          Top Rated Restaurants
        </button>
        <button
          className="btn clear-btn"
          style={{ border: "1px solid red" }}
          onClick={() => {
            setFilteredRestroList(restroList);
          }}
        >
          Clear Filters
        </button>
      </div>
      <div className="res-container">
        {filteredRestroList.map((restro) => {
          return (
            <Link to={"/restaurent/" + restro.info.id}>
              <RestaurentCard info={restro.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentLayout;
