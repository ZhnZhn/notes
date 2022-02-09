
const K_DELETE = 'Delete'
, K_DELETE_CODE = 46;

const isKeyDelete = (evt) => evt.key === K_DELETE
  || evt.keyCode === K_DELETE_CODE;

export default isKeyDelete
