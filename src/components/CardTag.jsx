const CardTag = ({ labelData }) => {
  return (
    <span
      className="tag"
      style={{ color: labelData.color, backgroundColor: labelData.bgColor }}
    >
      {labelData.labelText}
    </span>
  );
};

export default CardTag;
