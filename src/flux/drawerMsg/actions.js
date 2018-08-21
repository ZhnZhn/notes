export const ACTION = {
  ADD_DRAWER_MSG: 'ADD_DRAWER_MSG',
  REMOVE_DRAWER_MSG: 'REMOVE_DRAWER_MSG'
};

const _formatTime = (n) => n < 10 ? `0${n}` : n;

const _crMsg = (msg) => {
  const d = new Date();
  return `${_formatTime(d.getHours())}:${_formatTime(d.getMinutes())} ${msg}`;
}

export const addDrawerMsg = (msg, id) => ({
  type: ACTION.ADD_DRAWER_MSG,
  id,
  msg: _crMsg(msg)
});


export const removeDrawerMsg = (id) => ({
  type: ACTION.REMOVE_DRAWER_MSG,
  id
});

const actions = {
  addDrawerMsg,
  removeDrawerMsg
};

export default actions
