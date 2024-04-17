import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  console.log(props);

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
    <div className="res-card">
      <img className="res-logo" src={`${CDN_URL + cloudinaryImageId}`} />
      <div className="res-details">
        <div className="res-name">{name}</div>
        <div className="res-panel-1">
          <div className="res-rating-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="res-rating">
            <div className="res-rating-value">{avgRating}</div>
            <div className="res-delivery-duration">{sla.slaString}</div>
          </div>
        </div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-locality">{locality}</div>
      </div>
    </div>
  );
};

export default RestaurentCard;
