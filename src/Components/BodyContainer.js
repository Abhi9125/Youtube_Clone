import React from "react";
import MainContianer from "./MainContianer";
import SideBar from "./SideBar";
function BodyContainer() {
  return (
    <div className="flex">
      <SideBar />
      <MainContianer />
    </div>
  );
}

export default BodyContainer;
