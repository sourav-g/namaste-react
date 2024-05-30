import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogOut");

  const { userInfo } = useContext(UserContext); //consuming context

  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <nav className="flex justify-evenly shadow-lg border-solid">
        <Link className="w-6/12" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 124"
            id="swiggy"
            height="80"
            width="80"
            className="appLogo"
          >
            <path
              fill="#f0851d"
              d="M23.1,41.5c0.2-1.2,0.2-2.5,0.4-3.7c1-4.3,2.7-8.4,5.5-11.9c2-2.5,4-5.1,6.4-7.1c2.9-2.3,6.2-4.2,9.4-6
          c4.5-2.6,9.7-3,14.7-3.3c2.6-0.1,5.2,0.6,7.8,1.1c6.2,1.1,11.6,3.9,16.2,8.1c5.7,5.1,9.4,11.6,11.3,19c1,3.5,0.2,5.7-2.7,6.5
          c-3.1,0.8-6.3,1.3-9.5,1.7c-2.6,0.3-5.2,0.3-7.8,0.4c-0.6,0-1.3-0.1-2-0.2c-0.9-0.1-1.9-0.3-2.8-0.3c-1.1-0.1-2.2,0-3.7,0
          c-0.1-3-0.2-5.5-0.3-8.1c0-2,0.2-4-0.1-5.9c-0.1-0.9-1.2-2.2-1.9-2.3c-1.3-0.2-2.2,0.9-2.2,2.4c0,0.2,0,0.4,0,0.5
          c0,4.8,0.1,9.6,0,14.4c-0.1,3.7,0.9,3.9,4.1,4.2c4.2,0.4,8.4,0,12.6,0.1c3.3,0.1,6.6,0.1,9.8,0.7c3,0.6,5.6,3,5.2,5.7
          c-0.3,2.1-0.5,4.2-1.1,6.1c-1,3.1-2.1,6.2-3.5,9.1c-1.7,3.8-3.4,7.7-5.7,11.3c-4.8,7.5-9.8,14.8-15,22c-2.4,3.4-5.4,6.5-8.1,9.7
          c-0.7,0.8-1.2,0.8-1.9-0.2c-3.1-4.4-6.3-8.7-9.6-13c-3.8-5-7.2-10.4-10-16c-1-2.1-0.8-2.5,1.4-3c1.6-0.4,3.3-0.7,5-0.7
          c3.7-0.1,7.4-0.1,11.1,0c1.5,0,2,1,1.9,2.4c-0.1,2-0.1,4.1,0,6.1c0.1,1.3,0.6,2.5,2.1,2.8c1.6,0.3,2.2-0.8,2.6-2.1
          c0.2-0.6,0.3-1.3,0.3-1.9c0-3.1,0-6.1,0-9.2c0-3.3-1-4.3-4.3-4.2c-3.6,0.1-7.1,0.4-10.7,0.5c-3.2,0.1-6.4,0.1-9.5,0
          c-1.5-0.1-3.3-0.3-4.5-1.1c-1.7-1.2-3.3-2.9-4.2-4.8c-4.2-8.1-6.3-16.8-6.8-26"
            ></path>
          </svg>
        </Link>
        <ul className="w-6/12 m-auto flex justify-evenly">
          <li className="">
            <span>Online Status : {onlineStatus ? "🟢" : "❌"}</span>
          </li>
          <li className="">
            <i className="fa-solid fa-tag"></i>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="">
            <i className="fa-solid fa-handshake-angle"></i>
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <i className="fa-solid fa-shopping-basket"></i>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="">
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to="/cart">Cart</Link>
          </li>
          <li className="">
            <button
              className="btn"
              onClick={() => {
                btnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{userInfo.loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
