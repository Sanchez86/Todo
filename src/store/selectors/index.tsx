import { createSelector } from '@reduxjs/toolkit';
import IDate from 'interfaces';

export const selectIsLoading = (idItem: number) => createSelector(
  (state: any) => state.data,
  (data: IDate[]) => {
    const element = data.find((item) => item.id === idItem);
    return element.isLoading;
  },
);
