import React from "react";
// import MainContianer from "./MainContianer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
function BodyContainer() {
  return (
    <div className="flex">
      <SideBar />
      {/* <MainContianer /> */}
      <Outlet />
    </div>
  );
}

export default BodyContainer;
