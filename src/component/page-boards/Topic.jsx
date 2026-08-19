import CardCounter from '../zhn-card/CardCounter';

const CL_TOPIC = 'topic'
, S_COUNTER = {
  float: 'right',
  paddingRight: 12
};

const Topic = (
  props
) => (
  <div className={CL_TOPIC} >
    <span>
      {props.title}
    </span>
    <CardCounter
       style={S_COUNTER}
       value={props.count}
    />
  </div>
);

export default Topic
