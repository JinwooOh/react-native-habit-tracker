import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import styles from './styles';
import { Daily } from '../Daily';
import { Weekly } from '../Weekly';

const RepeatSelector = props => (
  <View style={styles.container}>
    <View style={styles.btnContainer}>
      <Button
        title="Daily"
        onPress={() => {
          if (!props.isDaily) props.handleIsDaily();
        }}
      />
      <Button
        title="Weekly"
        onPress={() => {
          if (props.isDaily) props.handleIsDaily();
        }}
      />
    </View>
    <View>
      {props.isDaily ? (
        <Daily
          dailyInfo={props.dailyInfo}
          handleUpdateDailyInfo={props.handleUpdateDailyInfo}
        />
      ) : (
        <Weekly
          weeklyInfo={props.weeklyInfo}
          handleUpdateWeeklyInfo={props.handleUpdateWeeklyInfo}
        />
      )}
    </View>
  </View>
);

export default RepeatSelector;
