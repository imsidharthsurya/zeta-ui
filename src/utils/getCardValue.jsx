import CardTag from "../components/CardTag";
import CardValueList from "../components/CardValueList";
import CardValueObject from "../components/CardValueObject";
export const getCardValue = (val, id) => {
  if (typeof val === "string") {
    return <span>{val}</span>;
  } else if (Array.isArray(val)) {
    return <CardValueList list={val} />;
  } else if (typeof val === "object" && val?.type === "label") {
    return <CardTag labelData={val} />;
  }
  return <CardValueObject valueObj={val} />;
};
