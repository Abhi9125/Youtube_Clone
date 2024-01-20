import React from "react";

function VideoCard({ videoInfo }) {
  const { title, channelTitle } = videoInfo?.snippet;
  const { url } = videoInfo?.snippet?.thumbnails?.medium;
  const { viewCount } = videoInfo?.statistics;

  let actualViewCount = viewCount;

  if (viewCount >= 1000 && viewCount < 1000000) {
    actualViewCount = Math.floor(viewCount / 1000) + "K";
  } else if (viewCount >= 1000000 && viewCount < 1000000000) {
    actualViewCount = Math.floor(viewCount / 1000000) + "M";
  } else actualViewCount = Math.floor(viewCount / 1000000000) + "B";

  return (
    <div className="mx-5 my-2 border rounded-lg w-60 hover:shadow-lg">
      <img className="p- 1 rounded-md" alt="thumbnail" src={url} />
      <h1 className="px-1 font-bold">{title}</h1>
      <h3 className="px-1 font-semibold">{channelTitle}</h3>
      <ul>
        <li className="px-1">{actualViewCount}</li>
      </ul>
    </div>
  );
}

// Higher Order Component --> By using HOC we make a ad videoCard.
export const AddVideoCard = ({ videoInfo }) => {
  return (
    <div>
      <div className="mx-5 my-2 p-1 px-4 rounded-lg absolute bg-red-500 text-white ">
        Ad
      </div>
      <VideoCard videoInfo={videoInfo} />
    </div>
  );
};

export default VideoCard;
