import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckHabitButton = props => (
  <Button
    type="clear"
    icon={
      props.habit.checkList.includes(props.date.format('MM/DD/Y')) ? (
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

export default CheckHabitButton;
