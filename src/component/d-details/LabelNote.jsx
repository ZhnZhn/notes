const LabelNote = ({
  className,
  clClose,
  item,
  onRemove
}) => (
  <button
    className={className}
    style={{ backgroundColor: item.color }}
    onClick={onRemove}
  >
    {item.title}
    {onRemove && <span className={clClose}>x</span>}
  </button>
);

export default LabelNote
