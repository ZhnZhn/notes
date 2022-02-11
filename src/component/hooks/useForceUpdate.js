import { useReducer } from '../uiApi';

const useForceUpdate = () =>
  useReducer( _ => Object.create(null));

export default useForceUpdate
