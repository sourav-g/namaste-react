import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  items = props.items;
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-200 flex justify-between text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="my-2">
              <span>{item.card.info.name}</span>
              <span> - Rs. {item.card.info.price / 100} </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-10 my-20 bg-black text-white rounded-lg shadow-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
