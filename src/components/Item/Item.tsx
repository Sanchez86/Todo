import React from 'react';
import IDate from 'interfaces';
import { useDispatch } from 'react-redux';
import { changeItem, editItem } from 'store/actions';

const Item = ({ id, label, completed }: IDate) => {
  const isActive: string = completed ? 'active' : '';

  const dispatch = useDispatch();

  const onComplet = (idItem: number) => {
    dispatch(changeItem(idItem));
  };
  const onEdit = () => (
    dispatch(editItem({ id, completed, label }))
  );

  return (
    <li key={id} className={`todo-list__item ${isActive}`}>
      <div className="d-flex">
        <button
          id={`id-${id}`}
          type="button"
          className="todo-list__done"
          onClick={() => onComplet(id)}
        >
          <i className="fas fa-check-circle" />
        </button>
        <label htmlFor={`id-${id}`} className="todo-list__label">{label}</label>
      </div>
      <div>
        <button type="button" className="todo-list__remove">
          <i className="fas fa-trash" />
        </button>
        <button
          type="button"
          className="todo-list__edit"
          onClick={onEdit}
        >
          <i className="fas fa-pencil-alt" />
        </button>
      </div>
    </li>
  );
};

export default Item;
