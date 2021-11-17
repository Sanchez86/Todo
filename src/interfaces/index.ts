export interface ITodo {
  userId?: number;
  body?: string;
  id: number;
  title: string;
  completed?: boolean;
}

export default interface IDate {
  userId?: number
  id: number,
  completed: boolean,
  title: string,
  isLoading?: boolean,
}
