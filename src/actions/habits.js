export const ADD_NEW_HABIT = 'ADD_NEW_HABIT';
export const CHECK_HABIT = 'CHECK_HABIT';
// habitToAdd = obj
export const addNewHabit = habitToAdd => ({
  type: ADD_NEW_HABIT,
  habitToAdd,
});

export const checkHabit = (habitName, date) => ({
  type: CHECK_HABIT,
  habitName,
  date,
});
