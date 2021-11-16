export interface ITodo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export default interface IDate {
  userId?: number
  id: number,
  completed: boolean,
  title: string,
  isLoading?: boolean,
}
