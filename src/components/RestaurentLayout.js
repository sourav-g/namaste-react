import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const RestaurentLayout = () => {
  //Re-renders (trigger a new reconciliation cycle) everytime state variable changes
  //but react updates only the necessary part of UI

  //* React Fiber -> New reconciliation process/algorithm to efficiently manipulate the DOM

  let [restro_list, setRestro_list] = useState([]);
  let [filteredRestro_list, setFilteredRestro_list] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    data = await data.json();
    let cards = data.data.cards;
    cards = cards.filter(
      (card) =>
        card.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
    );
    setRestro_list(
      cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro_list(
      cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const showTopRatedRestaurents = () => {
    filteredRestro_list = restro_list.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setFilteredRestro_list(filteredRestro_list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredRestro_list.length === 0 ? (
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
            filteredRestro_list = restro_list.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestro_list(filteredRestro_list);
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
            setFilteredRestro_list(restro_list);
          }}
        >
          Clear Filters
        </button>
      </div>
      <div className="res-container">
        {filteredRestro_list.map((restro) => {
          return <RestaurentCard key={restro.info.id} info={restro.info} />;
        })}
      </div>
    </div>
  );
};

export default RestaurentLayout;
