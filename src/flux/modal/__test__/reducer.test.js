import store from '../../store';
import { MD } from '../../../component/dialogs/modalRouter';
import reducer, {
  initialState,
  showDetails,
  showSettings,
  showNotif
} from '../reducer';

const { dispatch, getState } = store;
const _selectModal = () => getState().modal;

const _testActionResult = (prevState, expectedState) => {
  const nextState = _selectModal();
  expect(nextState).toEqual(expectedState)
  expect(nextState).not.toBe(prevState)
};

describe('modal slice', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(void 0, {})).toEqual(initialState)
  })

  test('should use action showDetails', ()=>{
    const prevState = _selectModal();
    const data = { id: 1 };
    dispatch(showDetails(data))

    _testActionResult(prevState, {
      id: MD.DETAILS, data
    })
  })
  test('should use action showSettings', ()=>{
    const prevState = _selectModal();
    dispatch(showSettings())

    _testActionResult(prevState, {
      id: MD.SETTINGS,
      data: void 0
    })
  })
  test('should use action showNotif', ()=>{
    const prevState = _selectModal();
    const data = 'info';
    dispatch(showNotif(data))

    _testActionResult(prevState, {
      id: MD.NOTIF,
      data
    })
  })
})
