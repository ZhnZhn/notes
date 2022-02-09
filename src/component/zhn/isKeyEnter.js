const K_ENTER = 'Enter'
, K_ENTER_CODE = 13;

const isKeyEnter = (evt) => evt.key === K_ENTER
  || evt.keyCode === K_ENTER_CODE;

export default isKeyEnter
