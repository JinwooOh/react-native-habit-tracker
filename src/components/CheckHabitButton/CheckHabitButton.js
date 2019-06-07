import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { isDateInCheckList } from '../../util/isDateInCheckList';

const CheckHabitButton = props => {
  console.log(isDateInCheckList(props.habit.checkList, props.date));
  return (
    <Button
      type="clear"
      icon={
        isDateInCheckList(props.habit.checkList, props.date) ? (
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
      onPress={() => props.handleCheckButton(props.habit)}
    />
  );
};

export default CheckHabitButton;
