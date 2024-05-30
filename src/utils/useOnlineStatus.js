import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  let [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("online");
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      console.log("offline");
      setStatus(false);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
