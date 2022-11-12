import moment from 'moment/moment';
import 'moment/locale/id';

const toLocalDate = date => {
  moment.locale('id');
  return moment(date).format('DD dddd MM YYYY');
};

export default toLocalDate;
