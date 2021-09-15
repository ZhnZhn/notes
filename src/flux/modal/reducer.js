import { createSlice } from '@reduxjs/toolkit';

import { MD } from '../../component/dialogs/modalRouter';

export const initialState = {
  id: null,
  data: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action){
      const { id, data } = action.payload;
      return { id, data };
    }
  }
});

const { actions, reducer } = modalSlice;
const { showModal } = actions;

export const showDetails = data => showModal({ id: MD.DETAILS, data })
export const showSettings = () => showModal({ id: MD.SETTINGS })
export const showNotif = data => showModal({ id: MD.NOTIF, data})

export default reducer
