import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

const SelectHabit = props => {
  const { habits } = props;
  const [habitSelector, setSelect] = useState();

  const habitList = [];
  const getHabitList = () => {
    habits.forEach((habit, index) => {
      const habitItem = {};
      habitItem.label = habit.name;
      habitItem.value = habit.name;
      habitItem.key = index;
      habitList.push(habitItem);
    });
  };
  getHabitList();

  const placeholder = {
    label: 'Select a habit...',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <View>
      <RNPickerSelect
        placeholder={placeholder}
        items={habitList}
        onValueChange={(value, index) => {
          setSelect(value);
          props.handleSelectedHabit(habits[index - 1]);
        }}
        style={pickerSelectStyles}
        value={habitSelector}
      />
    </View>
  );
};

export default SelectHabit;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 8,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    color: 'grey',
    paddingRight: 30, // to ensure the text is never behind the icon
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'brown',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
