import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';
import styles from './styles';
import { checkHabit } from '../../actions/habits';
import { showHabits } from '../../util/showHabits';
import { CheckHabitButton } from '../CheckHabitButton';

const swipeoutBtns = [
  {
    backgroundColor: '#fff',
    component: (
      <View style={{ backgroundColor: 'red', padding: 5 }}>
        <Button
          type="clear"
          icon={
            <Icon
              type="ionicon"
              name="ios-checkmark-circle"
              color="#517fa4"
              size={24}
            />
          }
        />
      </View>
    ),
  },
];

const HabitList = props => {
  const handleCheckButton = habit => {
    props.dispatch(checkHabit(habit.name, props.date));
  };

  return (
    <View style={styles.container}>
      {showHabits(props.date, props.habitList).map(habit => (
        <Swipeout
          style={styles.habitItemContainer}
          autoClose
          right={swipeoutBtns}
          key={habit.name}
        >
          <View style={styles.habitItem}>
            <CheckHabitButton
              habit={habit}
              date={props.date}
              handleCheckButton={handleCheckButton}
            />

            <TouchableOpacity
              style={styles.textBox}
              onPress={() => props.handleViewHabit(habit)}
            >
              <Text style={styles.text}>{habit.name}</Text>
            </TouchableOpacity>
          </View>
        </Swipeout>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  const { habitList } = state.habits;
  return {
    habitList,
  };
};

export default connect(mapStateToProps)(HabitList);
