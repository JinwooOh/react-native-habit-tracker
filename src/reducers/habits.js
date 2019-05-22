import moment from 'moment';
import { ADD_NEW_HABIT, CHECK_HABIT } from '../actions/habits';

const initialState = {
  selectedDate: moment().format('MMM Do YY'),
  habitList: [
    {
      name: 'meditation',
      repeat: 'monday',
      startDate: moment().format('MMM Do YY'),
      done: false,
    },
    {
      name: 'drink water',
      repeat: 'monday',
      startDate: moment().format('MMM Do YY'),
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_HABIT:
      return {
        ...state,
        habitList: [...state.habitList, action.habitToAdd],
      };
    case CHECK_HABIT:
      return {
        ...state,
        habitList: state.habitList.map((item, index) => {
          if (item.name === action.habitName) {
            return {
              ...item,
              done: !item.done,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
