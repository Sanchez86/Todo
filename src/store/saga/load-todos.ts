import { takeEvery, put } from 'redux-saga/effects';
import API from 'utils/api';
import IDate from 'interfaces';
import {
  loadTodosRequest,
  loadTodosResponse,
  loadTodosFailure,
} from '../actions/load-todos';

interface IResult {
  data: IDate[]
}

function* workerLoadTodos() { // worker
  try {
    const result: IResult = yield API.getTodos(); // получаем тудушки
    const newArr = result.data.map((item:IDate) => ({ ...item, isLoading: false }));

    yield put(loadTodosResponse(newArr)); // сетаем их в стор через loadTodosResponse
  } catch (error) {
    yield put(loadTodosFailure(error.toString())); // сетаем ошибку в стор через loadTodosFailure
  }
}

export default function* watcherLoadTodos() { // watcher
  yield takeEvery(loadTodosRequest, workerLoadTodos);
}
