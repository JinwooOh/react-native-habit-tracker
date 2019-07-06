import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { ProgressCircle } from 'react-native-svg-charts';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';
import { DeleteHabit } from '../DeleteHabit';

const calTotalPossibility = habitInfo => {
  const total = 0;
  const { startDate, dailyInfo, checkList } = habitInfo;

  const start = startDate.startOf('days');
  const end = moment().startOf('days');

  let totalDays = 0;

  dailyInfo.forEach((info, index) => {
    if (info === true) {
      let current = start.clone();
      if (current.isoWeekday() <= index) {
        current = current.isoWeekday(index);
      } else {
        current.add(1, 'weeks').isoWeekday(index);
      }
      while (current.isSameOrBefore(end)) {
        console.log(current.toString());
        current.day(7 + index);
        totalDays += 1;
      }
    }
  });

  const possibility = Math.ceil((checkList.length / totalDays) * 100);
  return possibility >= 100 ? 100 : possibility;
};

const checkedDateForCalendar = checkedDate => {
  const result = {};
  checkedDate.map(
    date =>
      (result[date.format('YYYY-MM-DD')] = {
        marked: true,
        dotColor: 'red',
        activeOpacity: 0,
      })
  );
  console.log(result);
  return result;
};

const DetailHabit = props => (
  <View>
    <View style={styles.infoContainer}>
      <View style={styles.card}>
        <Text style={styles.text}>Current Streak</Text>
        <Text style={styles.infoText}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Weekly Goal</Text>
        <Text style={styles.infoText}>
          {props.done} / {props.goal}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Complete Ratio</Text>
        <Text style={styles.infoText}>{calTotalPossibility(props.habit)}%</Text>
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

export default DetailHabit;
