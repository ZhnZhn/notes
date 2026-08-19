import {
  CL_SHOWING,  
  crCn,
  crBlockNoneStyle
} from '../styleFn';

const ShowHide = (
  props
) => (
  <div
    className={crCn(props.className, [props.isShow, CL_SHOWING])}
    style={crBlockNoneStyle(props)}
  >
    {props.children}
  </div>
);

export default ShowHide
