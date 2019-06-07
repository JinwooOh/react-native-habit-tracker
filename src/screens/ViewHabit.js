import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

export default class ViewHabit extends Component {
  calculatedWeeklyGoal = (isDaily, weeklyInfo, dailyInfo, checkList) => {
    const result = { done: 0, goal: 0 };
    const today = moment();
    const startDate = moment().startOf('week');
    const endDate = moment().endOf('week');
    console.log(startDate.toString());
    console.log(today.toString());
    console.log(endDate.toString());
    // console.log(moment(checkList[0]));
    if (isDaily) {
      // total weekly goal
      result.goal = dailyInfo.reduce(
        (acc, cur) => (cur === true ? acc + cur : acc),
        0
      );
      // console.log(
      //   moment(checkList[0]).isBetween(startDate, endDate, null, '[]')
      // );

      result.done = checkList.reduce(
        (acc, cur) =>
          moment(cur).isBetween(startDate, endDate, null, '[]') ? acc + 1 : acc,
        0
      );
    } else {
      // total weekly goal
      result.goal = weeklyInfo;
    }
    console.log(result);
    return result;
  };

  render() {
    const { params } = this.props.navigation.state;
    const habit = params ? params.habit : null;
    const {
      name,
      startDate,
      isDaily,
      dailyInfo,
      weeklyInfo,
      checkList,
    } = habit;
    const weeklyGoal = this.calculatedWeeklyGoal(
      isDaily,
      weeklyInfo,
      dailyInfo,
      checkList
    );
    console.log(weeklyGoal);
    console.log(habit);
    return (
      <View>
        {/* {checkList.map((date, index) => (
          <Text key={index}>{date}</Text>
        ))} */}
        <Text> ViewHabit 😃 </Text>

        <View>
          <Text>Weekly Goal</Text>
          <Text>{weeklyGoal.goal}</Text>
        </View>
      </View>
    );
  }
}
