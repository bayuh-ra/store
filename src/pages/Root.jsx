import React from "react";
import Navigation from "../components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navigation />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
