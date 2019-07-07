import moment from 'moment';
import calCompletionRate from '../util/calCompletionRate';
import { isDateInCheckList } from '../util/isDateInCheckList';
import { ADD_NEW_HABIT, CHECK_HABIT, DELETE_HABIT } from '../actions/habits';

const initialState = {
  habitList: [
    {
      name: 'Drink Coffee',
      isDaily: false,
      checkList: [],
      dailyInfo: [],
      weeklyInfo: 1,
      startDate: moment(),
      completionRate: 0,
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
            const newCheckList = [...item.checkList];
            console.log(isDateInCheckList(newCheckList, action.date));
            if (isDateInCheckList(newCheckList, action.date)) {
              // remove item from the array
              const itemIndex = newCheckList.findIndex(i =>
                i.startOf('day').isSame(action.date.startOf('day'))
              );
              newCheckList.splice(itemIndex, 1);
            } else {
              newCheckList.push(action.date);
            }

            // const newCheckList = { ...item.checkList };
            // newCheckList[action.date.format('MM/DD/Y')] = !newCheckList[
            //   action.date.format('MM/DD/Y')
            // ];
            return {
              ...item,
              done: !item.done,
              checkList: [...newCheckList],
              completionRate: calCompletionRate(item, newCheckList),
            };
          }
          return item;
        }),
      };
    case DELETE_HABIT:
      return {
        ...state,
        habitList: state.habitList.filter((item, index) => {
          // Remove item "X"
          // alternatively: you could look for a specific index
          if (item.name === action.habit.name) {
            return false;
          }
          // Every other item stays
          return true;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
