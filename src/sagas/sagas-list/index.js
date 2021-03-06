import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { setUsers } from '../../store/users/actions'
import { getUsers } from '../../api'//



export default function * userListSaga() {
  yield fork(getUsersWatcher)
}

function * getUsersWatcher() {
  yield takeEvery('GET_USERS', getUsersWorker)
}

function * getUsersWorker() {

  const users = yield call(getUsers);
  yield put(setUsers(users))
}
