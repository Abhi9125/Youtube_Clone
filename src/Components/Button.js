import React from "react";

function Button({ name }) {
  return (
    <button className="p-1 px-2 my-1 mx-2 border rounded-md bg-gray-300">
      {name}
    </button>
  );
}

export default Button;
