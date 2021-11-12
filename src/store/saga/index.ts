import { spawn } from 'redux-saga/effects';
import watcherLoadTodos from './load-todos';
import watcherRemoveTodos from './remove-todo';
import watcherAddTodos from './add-todo';

export default function* rootSaga() {
  yield spawn(watcherLoadTodos);
  yield spawn(watcherRemoveTodos);
  yield spawn(watcherAddTodos);
}
