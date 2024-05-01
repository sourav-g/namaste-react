import { useEffect, useState } from "react";
import { RESTAURENT_MENU_FETCH_URL } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  let [resInfo, setResInfo] = useState(null);

  //* Cannot use async with useEffect. WHY ?

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(RESTAURENT_MENU_FETCH_URL + "restaurantId=" + resId);
    let json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
