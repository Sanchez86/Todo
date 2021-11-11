import { createAction } from '@reduxjs/toolkit';
import IDate from 'interfaces';

export const loadTodosRequest = createAction('LOAD_TODOS_REQUEST');
export const loadTodosResponse = createAction<Array<IDate>>('LOAD_TODOS_RESPONSE');
export const loadTodosFailure = createAction<string>('LOAD_TODOS_FAILURE');
