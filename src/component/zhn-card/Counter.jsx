const S_COUNTER = {
  display: 'inline-block',
  paddingLeft: 12,
  fontWeight: 600
};

const Counter = ({
  style,
  value
}) => (
  <span style={{...S_COUNTER, ...style}}>
    {value}
  </span>
);

export default Counter
