import React from 'react';
import { useSelector } from 'react-redux';
import IDate from 'interfaces';
import { IState } from './types';

const InfoItem = ({ match: { params: { taskId } } }: any) => {
  const item:IDate = useSelector((state:IState) => state.data.find((elem) => elem.id === +taskId));

  return (
    <div className="item">{item.id}</div>
  );
};

export default InfoItem;
