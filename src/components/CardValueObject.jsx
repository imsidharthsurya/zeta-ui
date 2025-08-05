import React from "react";

const CardValueObject = ({ valueObj }) => {
  return Object.keys(valueObj).map((key, index) => {
    return (
      <div className="object-value">
        <span>{key}</span>
        <span>{valueObj[key]}</span>
      </div>
    );
  });
};

export default CardValueObject;
