import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import styles from './styles';

const selectedIndexesHelper = dailyInfo => {
  const selectedIndexes = [];
  for (let i = 0; i < dailyInfo.length; i++) {
    if (dailyInfo[i]) selectedIndexes.push(i);
  }
  return selectedIndexes;
};

const Daily = props => (
  <View>
    <Text style={styles.textInfo}>on these days</Text>
    <ButtonGroup
      selectedButtonStyle={styles.button}
      onPress={props.handleUpdateDailyInfo}
      buttons={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      selectedIndexes={selectedIndexesHelper(props.dailyInfo)}
    />
  </View>
);

export default Daily;
