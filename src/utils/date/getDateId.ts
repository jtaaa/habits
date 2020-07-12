import { format } from 'date-fns';

const getDateId = (date: Date) => {
  return format(date, 'MM-dd-yyyy');
};

export default getDateId;
