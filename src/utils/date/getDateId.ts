import { format } from 'date-fns';

const getDateId = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export default getDateId;
