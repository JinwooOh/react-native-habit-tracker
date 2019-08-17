import moment from 'moment';

export const isDateInCheckList = (checkList, date) =>
  checkList.some(e =>
    moment(e)
      .startOf('day')
      .isSame(date.startOf('day'))
  );
