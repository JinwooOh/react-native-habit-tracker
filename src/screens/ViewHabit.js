import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DetailHabit } from '../components/DetailHabit';
import { calculateWeeklyGoal } from '../util/calculateWeeklyGoal';

const ViewHabitStyles = EStyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '$darkText',
    margin: 10,
    fontWeight: '500',
  },
});

export default class ViewHabit extends Component {
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
    const weeklyGoal = calculateWeeklyGoal(
      isDaily,
      weeklyInfo,
      dailyInfo,
      checkList
    );
    return (
      <View>
        <Text style={ViewHabitStyles.title}>{name}</Text>
        <DetailHabit
          {...this.props}
          habit={habit}
          done={weeklyGoal.done}
          goal={weeklyGoal.goal}
        />
      </View>
    );
  }
}
