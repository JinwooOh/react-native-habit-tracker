import React from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { ConfirmButton } from '../ConfirmButton';
import { deleteHabit } from '../../actions/habits';

const handleDeleteHabit = props => {
  console.log(props);
  Alert.alert(
    'Delete Habit',
    'Are you sure?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          props.dispatch(deleteHabit(props.habit));
          const { navigation } = props;
          navigation.navigate('Home');
        },
      },
    ],
    { cancelable: false }
  );
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
