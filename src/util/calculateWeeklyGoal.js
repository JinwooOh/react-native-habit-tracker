import moment from 'moment';

export const calculateWeeklyGoal = (
  isDaily,
  weeklyInfo,
  dailyInfo,
  checkList
) => {
  const result = { done: 0, goal: 0 };
  if (!dailyInfo || !weeklyInfo) {
    return result;
  }
  const startDate = moment().startOf('week');
  const endDate = moment().endOf('week');
  if (isDaily) {
    // total weekly goal
    result.goal = dailyInfo.reduce(
      (acc, cur) => (cur === true ? acc + cur : acc),
      0
    );
  } else {
    // total weekly goal
    result.goal = weeklyInfo;
  }
  // total done
  result.done = checkList.reduce(
    (acc, cur) =>
      moment(cur).isBetween(startDate, endDate, null, '[]') ? acc + 1 : acc,
    0
  );
  return result;
};
