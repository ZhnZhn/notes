// @flow

export const ACTION = {
  ADD_DRAWER_MSG: 'ADD_DRAWER_MSG',
  REMOVE_DRAWER_MSG: 'REMOVE_DRAWER_MSG'
};

const _formatTime = (
  n /*: number */
) /*: string */ => n < 10 ? `0${n}` : `${n}`;

const _crMsg = (
  msg /*: string */
) /*: string */ => {
  const d = new Date();
  return `${_formatTime(d.getHours())}:${_formatTime(d.getMinutes())} ${msg}`;
}

export const addDrawerMsg = (
  msg /*: string */,
  id /*: string */
) => ({
  type: ACTION.ADD_DRAWER_MSG,
  id,
  msg: _crMsg(msg)
});


export const removeDrawerMsg = (
  id /*: string */
) => ({
  type: ACTION.REMOVE_DRAWER_MSG,
  id
});

/*::
export type DrawerMsgAction =
 | $Call<typeof addDrawerMsg, string, string>
 | $Call<typeof removeDrawerMsg, string>
*/

const actions = {
  addDrawerMsg,
  removeDrawerMsg
};

export default actions
