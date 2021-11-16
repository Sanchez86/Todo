import { fork } from 'redux-saga/effects';
import watcherLoadTodos from './load-todos';
import watcherRemoveTodos from './remove-todo';
import watcherAddTodos from './add-todo';
import watcherUpdateTodos from './update-todo';

export default function* rootSaga() {
  yield fork(watcherLoadTodos);
  yield fork(watcherRemoveTodos);
  yield fork(watcherAddTodos);
  yield fork(watcherUpdateTodos);
}
