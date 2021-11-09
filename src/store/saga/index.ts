import { takeEvery, put } from 'redux-saga/effects';
import API from 'utils/api';
import IDate from 'interfaces';

export function* workerSaga() {
  let data: Array<IDate> = [];
  yield API.getTodos().then((res) => {
    data = res.data;
  });

  yield put({ type: 'SET_TODO_DATA', payload: data });
}

export function* watchClickSaga() {
  yield takeEvery('GET_TODO_DATA', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
