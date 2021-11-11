import { spawn, call, all } from 'redux-saga/effects';
import watcherLoadTodos from './load-todos';
import watcherRemoveTodos from './remove-todo';

export default function* rootSaga() {
  yield spawn(watcherLoadTodos);
  yield spawn(watcherRemoveTodos);

  /* const sagas = [watcherLoadTodos, watcherRemoveTodos];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while(true) {
        try{
          yield call(saga);
          break;
        } catch {
          console.log(e);
        }
      }
    });
  });
  yield all(retrySagas); */
}
