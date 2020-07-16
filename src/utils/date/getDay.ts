import { format } from 'date-fns';
import { Day } from 'modules/habits';

const getDay = () => {
  return format(new Date(), 'EEEE') as Day;
};

export default getDay;
