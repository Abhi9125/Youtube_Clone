import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const dispatch = useDispatch();

  // We do not use useParam bca it use for dynamic url.
  // We use useSearchParam for quring String url
  const [searchParams] = useSearchParams();
  // console.log(searchParams);

  // console.log(searchParams); // return an object with all key and value.
  const id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="p-2 m-1">
        <iframe
          width="950"
          height="470"
          src={"https://www.youtube.com/embed/" + id + "?si=ZfobLPJr8ggCTqjE"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
}

export default WatchPage;
