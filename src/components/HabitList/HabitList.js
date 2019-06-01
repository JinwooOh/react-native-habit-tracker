import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';
import styles from './styles';
import { checkHabit } from '../../actions/habits';
import { showHabits } from '../../util/showHabits';

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
        // console.log(habit.checkList[props.date.format('MM/DD/Y')]);
        <Swipeout
          style={styles.habitItemContainer}
          autoClose
          right={swipeoutBtns}
          key={habit.name}
        >
          <View style={styles.habitItem}>
            <Button
              type="clear"
              icon={
                habit.checkList.includes(props.date.format('MM/DD/Y')) ? (
                  <Icon
                    type="ionicon"
                    name="ios-checkmark-circle"
                    color="#517fa4"
                    size={24}
                  />
                ) : (
                  <Icon
                    type="ionicon"
                    name="ios-checkmark-circle-outline"
                    color="#517fa4"
                    size={24}
                  />
                )
              }
              onPress={() => handleCheckButton(habit)}
            />

            <View style={styles.textBox}>
              <Text style={styles.text}>{habit.name}</Text>
            </View>
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
