import React from "react";

const CardValueList = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <span key={item} className="item-array">
            {item}
            {", "}
          </span>
        );
      })}
    </div>
  );
};

export default CardValueList;
