import { fork } from 'redux-saga/effects'
import userListSaga from './sagas-list'
import userAddSaga from './modal'
import filterUserSaga from "./search";



export default function* rootSaga() {
  yield fork(userListSaga);
  yield fork(userAddSaga);
  yield fork(filterUserSaga);
}
