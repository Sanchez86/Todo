import { createAction } from '@reduxjs/toolkit';

export const removeTodosRequest = createAction<number>('REMOVE_TODOS_REQUEST');
export const removeTodosResponse = createAction<{ result: string, id: number }>('REMOVE_TODOS_RESPONSE');
export const removeTodosFailure = createAction<string>('REMOVE_TODOS_FAILURE');
