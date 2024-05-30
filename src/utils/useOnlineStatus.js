import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  let [status, setStatus] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setStatus(true);
    }
    function handleOffline() {
      setStatus(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //runs when we move out of the component ?
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
};

export default useOnlineStatus;
