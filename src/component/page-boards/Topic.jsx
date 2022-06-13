import Card from '../zhn-card/Card'

const S_TOPIC = {
  paddingLeft: 12,
  lineHeight: 2
}
, S_COUNTER = {
  float: 'right',
  paddingRight: 12
};

const Topic = ({
  title,
  count
}) => (
  <div style={S_TOPIC} >
    <span>
      {title}
    </span>
    <Card.Counter
       style={S_COUNTER}
       value={count}
    />
  </div>
);

export default Topic
