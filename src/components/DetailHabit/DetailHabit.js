import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { ProgressCircle } from 'react-native-svg-charts';
import styles from './styles';
import { DeleteHabit } from '../DeleteHabit';

const calTotalPossibility = habitInfo => {
  const total = 0;
  const { startDate } = habitInfo;

  const start = startDate.startOf('days');
  const end = moment().startOf('days');

  let totalDays = 0;

  habitInfo.dailyInfo.forEach((info, index) => {
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

  const possibility = Math.ceil((habitInfo.checkList.length / totalDays) * 100);
  return possibility >= 100 ? 100 : possibility;
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
        {/* <ProgressCircle
        style={{ height: 100 }}
        progress={calTotalPossibility(props.habit) / 100}
        progressColor="#4F6D7A"
      /> */}
      </View>
    </View>

    <DeleteHabit habit={props.habit} {...props} />
  </View>
);

export default DetailHabit;
