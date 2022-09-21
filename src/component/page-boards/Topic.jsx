import Card from '../zhn-card/Card'

const CL_TOPIC = 'topic'
, S_COUNTER = {
  float: 'right',
  paddingRight: 12
};

const Topic = ({
  title,
  count
}) => (
  <div className={CL_TOPIC} >
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
