import { takeEvery, put, fork } from 'redux-saga/effects';
import API from 'utils/api';
import {
  removeTodosRequest,
  removeTodosResponse,
  removeTodosFailure,
} from '../actions/remove-todo';

function* workerRemoveTodos({ payload: id }: { payload: number }) {
  try {
    const result: string = yield API.removeTodos(id);
    yield put(removeTodosResponse({ result, id }));
  } catch (error) {
    yield put(removeTodosFailure(error.toString()));
  }
}

export default function* watcherRemoveTodos() {
  yield takeEvery(removeTodosRequest, workerRemoveTodos);
}
