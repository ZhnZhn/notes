const S_COUNTER = {
  display: 'inline-block',
  paddingLeft: 12,
  fontWeight: 600
};

const CardCounter = (
  props
) => (
  <span style={{...S_COUNTER, ...props.style}}>
    {props.value}
  </span>
);

export default CardCounter
