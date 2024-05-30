import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurentLayout from "./components/RestaurentLayout";
import RestaurentMenu from "./components/RestaurentMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

//Chunking
//Code splitting
//Dynamic bundling
//Lazy loading
//On Demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  let [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Make API call and get user data
    setUserInfo({
      loggedInUser: "Sourav",
      loggedInUserRole: "Business User",
      loggedInUserBranch: "Siliguri",
    });
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="mx-4 my-2">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurentLayout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
