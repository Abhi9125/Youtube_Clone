import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  // To Subsubscribe our app we use useSelector is give access to our app.
  // We always try to subscrib a perticular sclice or item that we want to subscribe.
  const toggleStatus = useSelector((store) => store.app.isMenuOpen);

  if (!toggleStatus) return null;

  return (
    <div className="m-1 shadow-md">
      <div className="mt-4 px-3 w-44">
        <Link to="/">
          <h1 className="font-bold">Home</h1>
        </Link>
        <ul>
          <li>Treadig</li>
          <li>Gaming</li>
          <li>Short</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="mt-4 px-3 w-32">
        <h1 className="font-bold">Shorts</h1>
        <ul>
          <li>Treadig</li>
          <li>Gaming</li>
          <li>Short</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="mt-4 px-3 w-32">
        <h1 className="font-bold">Subscribe</h1>
        <ul>
          <li>Treadig</li>
          <li>Gaming</li>
          <li>Short</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="mt-4 px-3 w-32">
        <h1 className="font-bold">YouTube Music</h1>
        <ul>
          <li>Treadig</li>
          <li>Gaming</li>
          <li>Short</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
