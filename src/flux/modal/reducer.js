import { createSlice } from '@reduxjs/toolkit'; 

import {
  MD_DETAILS,
  MD_SETTINGS,
  MD_NOTIF
} from '../../component/dialogs/modalRouter';

export const initialState = {
  id: null,
  data: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(_state, action){
      const { id, data } = action.payload;
      return { id, data };
    }
  }
});

const { actions, reducer } = modalSlice;
const { showModal } = actions;

export const showDetails = data => showModal({ id: MD_DETAILS, data })
export const showSettings = () => showModal({ id: MD_SETTINGS })
export const showNotif = data => showModal({ id: MD_NOTIF, data})

export default reducer
