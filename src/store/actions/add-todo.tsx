import { createAction } from '@reduxjs/toolkit';
import { ITodo } from '../../interfaces';

export const addTodosRequest = createAction<ITodo>('ADD_TODOS_REQUEST');
export const addTodosResponse = createAction<{ result: string, data: ITodo }>('ADD_TODOS_RESPONSE');
export const addTodosFailure = createAction<string>('ADD_TODOS_FAILURE');
