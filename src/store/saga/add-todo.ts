import { takeEvery, put } from 'redux-saga/effects';
import API from 'utils/api';
import { ITodo } from '../../interfaces';
import {
  addTodosRequest,
  addTodosResponse,
  addTodosFailure,
} from '../actions/add-todo';

interface IAction {
  payload: ITodo
}

// function* workerAddTodos({ payload } : { type: string, payload: ITodo }) {
function* workerAddTodos(action: IAction) {
  const data: ITodo = action.payload;
  try {
    const result: string = yield API.addTodo(action.payload);
    yield put(addTodosResponse({ result, data }));
  } catch (error) {
    yield put(addTodosFailure(error.toString()));
  }
}

export default function* watcherAddTodos() {
  yield takeEvery(addTodosRequest, workerAddTodos);
}
