import moment from 'moment';

export const showHabits = (selectedDate, habits) => {
  const startDateFilter = habits.filter(habit =>
    moment(habit.startDate)
      .startOf('day')
      .isSameOrBefore(selectedDate.startOf('day'))
  );

  const dayOfWeekFilter = startDateFilter.filter(habit => {
    if (habit.isDaily) {
      return habit.dailyInfo[selectedDate.day()];
    }
    return habit;
  });

  return dayOfWeekFilter;
};
