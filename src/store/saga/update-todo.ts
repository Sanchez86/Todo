import { takeEvery, put } from 'redux-saga/effects';
import API from 'utils/api';
import { ITodo } from 'interfaces';
import {
  updateTodosRequest,
  updateTodosResponse,
  updateTodosFailure,
} from '../actions/update-todo';

function* workerUpdateTodos({ payload: data }: { payload: ITodo }) {
  try {
    const result: string = yield API.updateTodo(data.id, data);
    yield put(updateTodosResponse(result));
  } catch (error) {
    yield put(updateTodosFailure(error.toString()));
  }
}

export default function* watcherUpdateTodos() {
  yield takeEvery(updateTodosRequest, workerUpdateTodos);
}
