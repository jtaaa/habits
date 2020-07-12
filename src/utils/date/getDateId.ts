import { format } from 'date-fns';

const getDateId = () => {
  return format(new Date(), 'MM-dd-yyyy');
};

export default getDateId;
