import React from "react";

const CryptoLink = (props) => {
  return (
    <a
      href={props.data.url}
      target="_blank"
      className="flex justify-between w-full p-4 border-b hover:bg-white cursor-pointer"
    >
      <h4 className="font-semibold text-lg">{props.data.type}</h4>
      <p className="text-blue-700">{props.data.name}</p>
    </a>
  );
};

export default CryptoLink;
