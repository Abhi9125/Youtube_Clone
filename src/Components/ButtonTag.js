import React from "react";
import Button from "./Button";

function ButtonTag() {
  const list = [
    "All",
    "Computer Application",
    "Mix",
    "Music",
    "Live",
    "Kaleo",
    "New to you",
    "Recently Uploaded",
  ];
  return (
    <div>
      {list.map((buttonTitle) => (
        <Button name={buttonTitle} />
      ))}
      {/* <Button name="All" />
      <Button name="Computer Science" />
      <Button name="Mix" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Kaleo" />
      <Button name="Watched" />
      <Button name="New to you" />
      <Button name="Recently uploaded" /> */}
    </div>
  );
}

export default ButtonTag;
