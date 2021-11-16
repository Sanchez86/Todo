import { createAction } from '@reduxjs/toolkit';
import { ITodo } from 'interfaces';

export const updateTodosRequest = createAction<ITodo>('UPDATE_TODOS_REQUEST');
export const updateTodosResponse = createAction<any>('UPDATE_TODOS_RESPONSE');
export const updateTodosFailure = createAction<string>('UPDATE_TODOS_FAILURE');
