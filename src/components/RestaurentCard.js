import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
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
    <div className="m-5 p-2 w-[200px] h-[500px] border-solid border-2 rounded-lg">
      <img className="res-logo" src={`${CDN_URL + cloudinaryImageId}`} />
      <div className="mt-5">
        <div className="font-semibold">{name}</div>
        <div className="flex mt-5">
          <div className="res-rating-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="flex ml-5">
            <div className="res-rating-value">{avgRating}</div>
            <div className="ml-10">{sla.slaString}</div>
          </div>
        </div>
        <div className="mt-5">{cuisines.join(", ")}</div>
        <div className="mt-5">{locality}</div>
      </div>
    </div>
  );
};

export default RestaurentCard;
