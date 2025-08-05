import React from "react";
import CardValue from "./CardValue";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <h2>{data.title}</h2>
      {data.label && <span>{data.label}</span>}
      {data.children.map((userInfo, index) => {
        return (
          <div key={index} className="card-data">
            <p>{userInfo?.key}</p>

            <CardValue value={userInfo?.value} />
            <p>{userInfo?.metadata}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
