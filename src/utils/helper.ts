import IDate from 'interfaces';

const deepCopy = (data: Array<IDate>): Array<IDate> => JSON.parse(JSON.stringify(data));

export { deepCopy };
