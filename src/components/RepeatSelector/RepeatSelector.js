import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { repeatItems } from '../../config/newhabit';
import styles from './styles';

const RepeatSelector = props => (
  <View>
    <RNPickerSelect
      placeholder={{}}
      items={repeatItems}
      onValueChange={value => props.handleRepeatSelector(value)}
      style={styles}
      // value={this.state.repeat}
    />
  </View>
);
export default RepeatSelector;
