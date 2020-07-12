import { format } from 'date-fns';
import { DAY } from 'modules/habits';

const getDay = () => {
  return format(new Date(), 'EEEE') as DAY;
};

export default getDay;
