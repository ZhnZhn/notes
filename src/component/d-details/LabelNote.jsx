const LabelNote = ({
  className,
  clClose,
  item,
  onRemove
}) => (
  <button
    type="button"
    className={className}
    style={{ backgroundColor: item.color }}
    onClick={onRemove}
  >
    {item.title}
    {onRemove && <span className={clClose}>x</span>}
  </button>
);

export default LabelNote
