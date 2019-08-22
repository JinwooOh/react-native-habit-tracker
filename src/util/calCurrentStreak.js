// Calculate sequence in backward
import moment from 'moment';

const calCurrentStreak = props => {
  const { habit, done, goal } = props;
  let streak = 0;
  console.log(habit, done, goal);

  if (habit.isDaily) {
    // compare with checkList and dailyInfo
    const { done, dailyInfo, checkList } = habit;
    const todayDayOfWeek = moment(Date.now()).day();

    // make an array of checkdays
    // [09/33, 09/22 09/11...]
    // from startday to today
    const start = moment(habit.startDate).startOf('days');
    const end = moment().startOf('days');

    // Make a check list from dailyInfo
    const CheckListinDates = [];
    dailyInfo.forEach((info, index) => {
      if (info === true) {
        let current = start.clone();
        if (current.isoWeekday() <= index) {
          current = current.isoWeekday(index);
        } else {
          current.add(1, 'weeks').isoWeekday(index);
        }
        while (current.isSameOrBefore(end)) {
          CheckListinDates.push(moment(current).format());
          current.day(7 + index);
        }
      }
    });

    // Make a checked list from checkList
    const sortedCheckList = [...checkList].sort(
      (a, b) => moment(a).format('YYYYMMDD') - moment(b).format('YYYYMMDD')
    );

    // Compare those two lists
    while (sortedCheckList.length !== 0) {
      const curChecked = sortedCheckList.pop();
      const curInfo = CheckListinDates.pop();
      console.log('curChecked', curChecked);
      console.log('curInfo', curInfo);
      if (moment(curChecked).isSame(curInfo, 'day')) {
        streak += 1;
      } else {
        break;
      }
    }
    return streak;
  }
};

export default calCurrentStreak;
