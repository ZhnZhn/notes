import { CL_CARD_TITLE } from '../styleFn';
import InputText from '../zhn/InputText';

const CardTitle = (props) => (
  <InputText
    className={CL_CARD_TITLE}
    {...props}
  />
);

export default CardTitle
