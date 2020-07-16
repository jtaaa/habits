import { format } from 'date-fns';
import { Day } from 'modules/habits';
import { TODAY } from './constants';

const getDay = (date = TODAY) => {
  return format(date, 'EEEE') as Day;
};

export default getDay;
