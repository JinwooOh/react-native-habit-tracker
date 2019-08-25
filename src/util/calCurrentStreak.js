// Calculate sequence in backward
import moment from 'moment';

const calCurrentStreak = props => {
  const { habit, done, goal } = props;
  let streak = 0;

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
    let checkListinDates = [];
    dailyInfo.forEach((info, index) => {
      if (info === true) {
        let current = start.clone();
        if (current.isoWeekday() <= index) {
          current = current.isoWeekday(index);
        } else {
          current.add(1, 'weeks').isoWeekday(index);
        }
        while (current.isSameOrBefore(end)) {
          checkListinDates.push(moment(current).format());
          current.day(7 + index);
        }
      }
    });

    // Make a checked list from checkList
    const sortedCheckList = [...checkList].sort(
      (a, b) => moment(a).format('YYYYMMDD') - moment(b).format('YYYYMMDD')
    );
    checkListinDates = [...checkListinDates].sort(
      (a, b) => moment(a).format('YYYYMMDD') - moment(b).format('YYYYMMDD')
    );

    // Compare those two lists
    while (sortedCheckList.length !== 0) {
      const curChecked = sortedCheckList.pop();
      const curInfo = checkListinDates.pop();

      if (moment(curChecked).isSame(curInfo, 'day')) {
        streak += 1;
      } else {
        break;
      }
    }
    console.log(streak);
    return streak;
  }

  const { checkList, weeklyInfo } = habit;
  // Weekly streak
  let startWeek = moment(habit.startDate).week();
  const endWeek = moment().week();

  const checkListinDates = [];
  while (startWeek !== endWeek) {
    for (let i = 0; i < weeklyInfo; i++) {
      checkListinDates.push(startWeek);
    }
    startWeek += 1;
  }
  const takeSmallerDays =
    moment().day() < weeklyInfo ? moment().day() : weeklyInfo;
  console.log(moment().day());
  for (let i = 0; i <= takeSmallerDays; i++) {
    checkListinDates.push(startWeek);
  }

  // Make a checked list from checkList
  const sortedCheckList = [...checkList].sort(
    (a, b) => moment(a).format('YYYYMMDD') - moment(b).format('YYYYMMDD')
  );
  // console.log(checkListinDates);
  // console.log(sortedCheckList);

  while (sortedCheckList.length !== 0) {
    const curChecked = moment(sortedCheckList.pop()).week();
    const curInfo = checkListinDates.pop();
    console.log(curChecked);
    console.log(curInfo);
    if (curChecked === curInfo) {
      streak += 1;
    }
    if (curChecked < curInfo) {
      break;
    }
    if (curChecked > curInfo) {
      checkListinDates.push(curInfo);
    }
  }
  return streak;
};

export default calCurrentStreak;
