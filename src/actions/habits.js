export const ADD_NEW_HABIT = 'ADD_NEW_HABIT';

// habitToAdd = obj
export const addNewHabit = habitToAdd => ({
  type: ADD_NEW_HABIT,
  habitToAdd,
});
