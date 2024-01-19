import React, { useEffect, useState } from "react";
import { YouTube_API } from "../utils/Contant";
import VideoCard from "./VideoCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
function VideoContainer() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const jsonData = await fetch(YouTube_API);
    const data = await jsonData.json();

    setVideoList(data.items);
  };
  return videoList.length === 0 ? (
    <Simmer />
  ) : (
    <div className="flex flex-wrap cursor-pointer">
      {videoList.map((video) => (
        // this urk know as query param
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
      {/* <VideoCard videoInfo={videoList[0]} /> */}
    </div>
  );
}

export default VideoContainer;
