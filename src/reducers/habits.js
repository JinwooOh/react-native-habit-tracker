import { ADD_NEW_HABIT } from '../actions/habits';

const initialState = {
  habitList: [
    {
      name: 'meditation',
    },
    {
      name: 'drink water',
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
    default:
      return state;
  }
};

export default reducer;
