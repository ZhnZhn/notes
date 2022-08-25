import InputText from '../zhn/InputText';
import { CL_CARD_TITLE } from '../style/CL';

const Title = (props) => (
  <InputText
    className={CL_CARD_TITLE}
    {...props}
  />
);

export default Title
