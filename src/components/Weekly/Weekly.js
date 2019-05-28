import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import styles from './styles';

const Weekly = props => (
  <View>
    <Text style={styles.textInfo}>
      {props.weeklyInfo} {props.weeklyInfo === 1 ? 'day' : 'days'} a week
    </Text>
    <ButtonGroup
      selectedButtonStyle={styles.button}
      onPress={props.handleUpdateWeeklyInfo}
      buttons={['1', '2', '3', '4', '5', '6', '7']}
      selectedIndex={props.weeklyInfo - 1}
    />
  </View>
);

export default Weekly;
