import {
  crShowingCn,
  crBlockNoneStyle
} from '../styleFn';

const ShowHide = (
  props
) => (
  <div
    className={crShowingCn(props)}
    style={crBlockNoneStyle(props)}
  >
    {props.children}
  </div>
);

export default ShowHide
