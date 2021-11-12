import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from 'store/actions';
import { addTodosRequest } from 'store/actions/add-todo';
import { ITemp } from './types';
import './AddItem.scss';

const AddItem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState(false);
  const refInput = useRef(null);
  const [isTemp, setIsTemp] = useState(false);

  const temp = useSelector((state: ITemp) => state.temp);

  useEffect(() => {
    if (temp) {
      setIsActive(true);
      setTitle(temp.title);
      setIsTemp(true);
    }
  }, [temp]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const onAdd = () => {
    if (title === '') {
      refInput.current.focus();
    } else {
      dispatch(addTodosRequest(
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ));
      setTitle('');
    }
  };

  const onEdit = () => {
    dispatch(updateItem(
      {
        title,
        completed: false,
        id: temp.id,
      },
    ));

    setTitle('');
    setIsActive(false);
  };

  const onClose = (e: any) => {
    if (e.code === 'Enter') {
      if (isTemp) {
        onEdit();
      } else {
        onAdd();
      }
    }
  };

  const onToggle = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setTitle('');
      setIsTemp(false);
    }
  };

  return (
    <div>

      <div className={`add-item ${isActive ? 'active' : ''}`}>
        <input
          className="add-item__input"
          type="text"
          placeholder="Enter text"
          value={title}
          ref={refInput}
          onChange={onChange}
          onKeyPress={onClose}
        />
        <button
          type="button"
          onClick={isTemp ? onEdit : onAdd}
          className="add-item__add"
        >
          <i className={`fas fa-${isTemp ? 'pencil-alt' : 'paper-plane'}`} />
        </button>
      </div>

      <button
        type="button"
        className="add-item__toggle"
        onClick={onToggle}
      >
        <i className={`fa fa-${isActive ? 'minus' : 'plus'}`} aria-hidden="true" />
      </button>

    </div>
  );
};

export default AddItem;
