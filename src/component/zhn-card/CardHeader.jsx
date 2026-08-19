
const S_DIV = {
  padding: '8px 0',
  lineHeight: '36px'
};

const CardHeader = (
  props
) => (
  <div style={S_DIV}>
    {props.children}
  </div>
);

export default CardHeader
