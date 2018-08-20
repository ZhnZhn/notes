import React from 'react'

import InputText from '../zhn/InputText'
import CL from '../style/cl'

const Title = (props) => (
  <InputText
    className={CL.CARD_TITLE}
    {...props}
  />
);

export default Title
