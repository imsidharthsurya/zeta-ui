import CardTag from "./CardTag";
import CardItemList from "./CardItemList";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="heading-container">
        <h2>{data.title}</h2>
        {data.label && <CardTag labelData={data.label} />}
      </div>
      <CardItemList list={data} />
    </div>
  );
};

export default Card;
