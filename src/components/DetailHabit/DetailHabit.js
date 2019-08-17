import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';
import { DeleteHabit } from '../DeleteHabit';
import calCurrentStreak from '../../util/calCurrentStreak';

const checkedDateForCalendar = checkedDate => {
  const result = {};
  checkedDate.map(
    date =>
      (result[moment(date).format('YYYY-MM-DD')] = {
        marked: true,
        dotColor: 'red',
        activeOpacity: 0,
      })
  );
  console.log(result);
  return result;
};

const DetailHabit = props => {
  const { done, goal, habit } = props;
  // isDaily, weeklyInfo, dailyInfo, checkList
  const currentStreak = calCurrentStreak({ ...props, done, goal });
  console.log('curStreak: ', currentStreak);
  console.log(props);
  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Current Streak</Text>
          <Text style={styles.infoText}>{currentStreak}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Weekly Goal</Text>
          <Text style={styles.infoText}>
            {props.done} / {props.goal}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Completion Rate</Text>
          <Text style={styles.infoText}>
            {props.habit.completionRate || 0}%
          </Text>
        </View>
      </View>
      <Calendar
        // https://www.npmjs.com/package/react-native-calendars
        onDayPress={day => {
          console.log('selected day', day);
        }}
        monthFormat="MMM yyyy"
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        disableMonthChange
        firstDay={0}
        markedDates={checkedDateForCalendar(props.habit.checkList)}
      />
      <DeleteHabit habit={props.habit} {...props} />
    </View>
  );
};

export default DetailHabit;
