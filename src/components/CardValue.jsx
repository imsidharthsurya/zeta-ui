import { getCardValue } from "../utils/getCardValue.jsx";

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
