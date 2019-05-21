import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { checkHabit } from '../../actions/habits';

const HabitList = props => {
  const handleCheckButton = habit => {
    props.dispatch(checkHabit(habit.name));
  };
  return (
    <View style={styles.container}>
      {props.habitList.map(habit => (
        <View key={habit.name} style={styles.habitItem}>
          <Button
            type="clear"
            icon={
              habit.done ? (
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
