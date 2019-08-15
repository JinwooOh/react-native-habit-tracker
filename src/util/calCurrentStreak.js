// Calculate sequence in backward
import moment from 'moment';

const calCurrentStreak = props => {
  const { habit, done, goal } = props;
  let streak = 0;
  console.log(habit, done, goal);

  if (habit.isDaily) {
    // compare with checkList and dailyInfo
    const { done, dailyInfo, checkList } = habit;
    console.log(habit.checkList);
    const todayDayOfWeek = moment(Date.now()).day();

    // [t,t,f,t,t,t,t]
    // 0 1 2 3 4 5 6
    // [{}, {}, {}, {}...]
    // 1. reverse checklist
    // 2. iterate checkList
    // 3. grap two day and see if there is t value between them
    // most cur is 0 index
    const sortedCheckList = checkList
      .sort((a, b) => a.format('YYYYMMDD') - b.format('YYYYMMDD'))
      .reverse();

    let stop = false;
    let index = 0;
    let curDate = sortedCheckList[index];
    while (curDate && !stop) {
      index += 1;
      streak += 1;
      const nextDate = sortedCheckList[index];
      if (nextDate !== undefined) {
        // CHECK SUNDAY IS CUR  (index is = 0)
        console.log('curDate', curDate.day());
        console.log('nextDate', nextDate.day());
        let curDay = curDate.day();
        const nextDay = nextDate.day();
        if (curDay < nextDay) {
          curDay += 7;
        }
        for (let i = nextDay + 1; i < curDay; i++) {
          console.log('i: ', i);
          if (dailyInfo[i]) {
            console.log('stop');
            stop = true;
            break;
          }
        }
      }
      curDate = nextDate;
    }
    console.log(streak);

    // calculate from dailyInfo
  } else {
    // calculate from weeklyInfo
    // just calculate sequence
  }
};

export default calCurrentStreak;

// goal int
// weeklyinfo int
// dailyinfo array of boolean
// checkList array of moment

// done
