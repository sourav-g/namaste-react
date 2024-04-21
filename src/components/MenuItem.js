import { MENU_IMAGE_CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
  const { name, description, price, defaultPrice, imageId } = props.menuInfo;
  return (
    <div className="menu-item">
      <div className="menu-text">
        <h3>{name}</h3>
        <p>{"Rs. " + (price || defaultPrice) / 100}</p>
        <hr />
        <p>{description}</p>
      </div>
      <div className="menu-image">
        <img src={MENU_IMAGE_CDN_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuItem;