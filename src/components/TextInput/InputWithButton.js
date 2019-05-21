import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = ({ onPress, buttonText, ...props }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      autoFocus
      underlineColorAndroid="transparent"
      {...props}
    />
    {/* <TouchableHighlight onPress={onPress}>
      <Button onPress={onPress} title="Add Habit" />
    </TouchableHighlight> */}
  </View>
);

export default InputWithButton;
