import React from 'react';
import { Link } from 'react-router-dom';
import IDate from 'interfaces';
import { IinitialState } from 'store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeItem,
  setTemp,
} from 'store/actions';
import { removeTodosRequest } from 'store/actions/remove-todo';
import Loader from '../Loader';

const Item = ({ id, title, completed }: IDate) => {
  const isActive: string = completed ? 'active' : '';

  const dispatch = useDispatch();

  const onComplet = (e: any) => {
    dispatch(changeItem(parseInt(e.target.dataset.id, 10)));
  };
  const onEdit = () => (
    dispatch(setTemp({ id, completed, title }))
  );

  const onRemove = (idItem: number) => {
    dispatch(removeTodosRequest(idItem));
  };

  const isLoading = useSelector(
    (state: IinitialState) => state.data.find((item) => (item.id === id ? item.isLoading : '')),
  );

  return (
    <li className={`todo-list__item ${isActive}`}>
      <div className="d-flex">
        <button
          id={`id-${id}`}
          type="button"
          className="todo-list__done"
          data-id={id}
          onClick={onComplet}
        >
          <i className="fas fa-check-circle" />
        </button>

        <Link to={`/tasks/${id}`} className="todo-list__label">{title}</Link>
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="todo-list__edit"
          onClick={onEdit}
        >
          <i className="fas fa-pencil-alt" />
        </button>
        <button
          type="button"
          className="todo-list__remove"
          onClick={() => onRemove(id)}
        >
          <i className="fas fa-trash" />
        </button>

      </div>
      { isLoading ? <Loader /> : '' }
    </li>
  );
};

export default Item;
