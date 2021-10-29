import React from 'react';
import { Link } from 'react-router-dom';
import IDate from 'interfaces';
import { useDispatch } from 'react-redux';
import {
  removeItem,
  changeItem,
  setTemp,
} from 'store/actions';

const Item = ({ id, label, completed }: IDate) => {
  const isActive: string = completed ? 'active' : '';

  const dispatch = useDispatch();

  const onComplet = (e: any) => {
    dispatch(changeItem(parseInt(e.target.dataset.id, 10)));
  };
  const onEdit = () => (
    dispatch(setTemp({ id, completed, label }))
  );

  const onRemove = (idItem: number) => {
    dispatch(removeItem(idItem));
  };

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

        <Link to={`/tasks/${id}`} className="todo-list__label">{label}</Link>
      </div>
      <div>
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
    </li>
  );
};

export default Item;
