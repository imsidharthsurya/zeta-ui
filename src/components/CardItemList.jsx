import CardValue from "./CardValue";
const CardItemList = ({ list }) => {
  return list.children.map((userInfo, index) => {
    return (
      <div key={index} className="card-data">
        <p>{userInfo?.key}</p>

        <CardValue value={userInfo?.value} />
        <p>{userInfo?.metadata}</p>
      </div>
    );
  });
};

export default CardItemList;
