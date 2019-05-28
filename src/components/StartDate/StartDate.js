import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';

const StartDate = props => (
  <View style={styles.container}>
    <TextInput
      placeholder="Start Date"
      style={styles.input}
      underlineColorAndroid="transparent"
      {...props}
      editable={false}
    />
    <Button title="Start date" onPress={props.showDateTimePicker} />
    <DateTimePicker
      isVisible={props.isDateTimePickerVisible}
      onConfirm={props.handleDatePicked}
      onCancel={props.hideDateTimePicker}
    />

    {/* <TouchableHighlight onPress={onPress}>
        <Button onPress={onPress} title="Add Habit" />
      </TouchableHighlight> */}
  </View>
);

export default StartDate;
