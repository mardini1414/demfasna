import moment from 'moment/moment';

const toLocalDate = date => {
  moment.locale('fr');
  return moment(date).format('DD dddd MM YYYY');
};

export default toLocalDate;
