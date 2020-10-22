import InputText from '../zhn/InputText'
import CL from '../style/CL'

const Title = (props) => (
  <InputText
    className={CL.CARD_TITLE}
    {...props}
  />
);

export default Title
