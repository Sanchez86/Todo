export interface ITodo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export default interface IDate {
  id: number,
  completed: boolean,
  title: string,
  isLoading?: boolean,
}
