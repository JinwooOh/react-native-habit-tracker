import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ConfirmButton } from '../ConfirmButton';
import { deleteHabit } from '../../actions/habits';

const handleDeleteHabit = props => {
  props.dispatch(deleteHabit(props.habit));
};

const DeleteHabit = props => (
  <View>
    <ConfirmButton
      title="Delete Habit"
      onPress={() => handleDeleteHabit(props)}
    />
  </View>
);

export default connect()(DeleteHabit);
