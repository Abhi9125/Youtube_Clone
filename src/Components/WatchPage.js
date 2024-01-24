import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { UseDispatch } from "react-redux";
import { addChatInStore } from "../utils/ChatSlice";

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
    <div className="w-full flex flex-col mx-2">
      <div className=" flex p-2 m-1 ">
        <iframe
          className="rounded-2xl"
          width="950"
          height="470"
          src={"https://www.youtube.com/embed/" + id + "?si=ZfobLPJr8ggCTqjE"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="w-[350px] h-[470px] overflow-y-scroll m-1 ml-3 px-2 border shadow-xl  flex flex-col-reverse rounded-lg">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
}

export default WatchPage;
