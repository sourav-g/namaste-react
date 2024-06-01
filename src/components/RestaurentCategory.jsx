import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    showItems = !showItems;
  };

  return (
    <div className="my-2 border-2 w-6/12 m-auto bg-slate-100 shadow-lg">
      <div
        className="flex justify-between cursor-pointer bg-gray-200 h-10"
        onClick={handleClick}
      >
        <span className="mx-4 my-auto font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        {!showItems && <span className="mx-4 text-2xl">⬇️</span>}
        {showItems && <span className="mx-4 text-2xl">⬆️</span>}
      </div>
      {showItems && <ItemList items={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurentCategory;
