import moment from 'moment';
import { ADD_NEW_HABIT, CHECK_HABIT, addNewHabit } from '../actions/habits';

const initialState = {
  habitList: [
    // {
    //   name: 'meditation',
    //   repeat: 'monday',
    //   startDate: moment(),
    //   done: false,
    // },
    // {
    //   name: 'drink water',
    //   repeat: 'monday',
    //   startDate: moment(),
    //   done: false,
    // },
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
            if (newCheckList.includes(action.date.format('MM/DD/Y'))) {
              // remove item from the array
              const itemIndex = newCheckList.indexOf(
                action.date.format('MM/DD/Y')
              );
              newCheckList.splice(itemIndex, 1);
            } else {
              newCheckList.push(action.date.format('MM/DD/Y'));
            }

            // const newCheckList = { ...item.checkList };
            // newCheckList[action.date.format('MM/DD/Y')] = !newCheckList[
            //   action.date.format('MM/DD/Y')
            // ];
            return {
              ...item,
              done: !item.done,
              checkList: [...newCheckList],
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
