import React from "react";
const getCardValue = (val, id) => {
  //   return <span key={id}>{"sid"}</span>;

  if (typeof val === "string") {
    return <span>{val}</span>;
  } else if (Array.isArray(val)) {
    return (
      <div>
        {val.map((item, index) => {
          return (
            <span key={item} className="item-array">
              {item}
              {", "}
            </span>
          );
        })}
      </div>
    );
  } else if (typeof val === "object" && val?.type === "label") {
    return (
      <span
        className="tag"
        style={{ color: val.color, backgroundColor: val.bgColor }}
      >
        {val.labelText}
      </span>
    );
  }
  return Object.keys(val).map((key, index) => {
    return (
      <div className="object-value">
        <span>{key}</span>
        <span>{val[key]}</span>
      </div>
    );
  });
};

const CardValue = ({ value }) => {
  return (
    <div className="card-value-container">
      {value.map((val, index) => {
        return getCardValue(val, index);
      })}
    </div>
  );
};

export default CardValue;
