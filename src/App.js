import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurentLayout from "./components/RestaurentLayout";

const AppLayout = () => {
  return (
    <div className="appContainer">
      <Header />
      <RestaurentLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
