import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  //console.log(props.info);
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = props.info;

  return (
    <div className="m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-200">
      {/*good use-case for learning flexbox & grid*/}

      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withDiscountLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 border-solid border-2 bg-black rounded-md text-white">
          Flat Discount
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
