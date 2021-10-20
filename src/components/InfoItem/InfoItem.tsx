import React from 'react';
import { useSelector } from 'react-redux';
import IDate from '../../interfaces';
import { IState } from './types';

const InfoItem = ({ match }: any) => {
  const list:Array<IDate> = useSelector((state:IState) => state.data);
  const item = list.filter((elem) => elem.id === +match.params.taskId);

  return (
    <div>
      <div>
        <div className="item">{item[0].id}</div>
      </div>
    </div>
  );
};

export default InfoItem;
