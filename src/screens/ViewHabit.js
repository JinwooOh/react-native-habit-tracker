import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ViewHabit extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const habit = params ? params.habit : null;
    console.log(habit);
    return (
      <View>
        <Text> ViewHabit 😃 </Text>
      </View>
    );
  }
}
