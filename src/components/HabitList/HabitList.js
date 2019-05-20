import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const HabitList = props => (
  <View>
    {props.habitList.map(habit => (
      <Text style={styles.habitItem}>{habit.name}</Text>
    ))}
  </View>
);

const mapStateToProps = state => {
  console.log(state.habits);
  const { habitList } = state.habits;
  return {
    habitList,
  };
};

export default connect(mapStateToProps)(HabitList);
