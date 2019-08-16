import moment from 'moment';

const calCompletionRate = (habitInfo, newCheckList) => {
  console.log(habitInfo);
  const { startDate, dailyInfo } = habitInfo;
  const start = moment(startDate).startOf('days');
  const end = moment().startOf('days');

  let totalDays = 0;

  dailyInfo.forEach((info, index) => {
    if (info === true) {
      let current = start.clone();
      if (current.isoWeekday() <= index) {
        current = current.isoWeekday(index);
      } else {
        current.add(1, 'weeks').isoWeekday(index);
      }
      while (current.isSameOrBefore(end)) {
        console.log(current.toString());
        current.day(7 + index);
        totalDays += 1;
      }
    }
  });

  const possibility = Math.ceil((newCheckList.length / totalDays) * 100);
  console.log(possibility);
  return possibility >= 100 ? 100 : possibility;
};

export default calCompletionRate;
