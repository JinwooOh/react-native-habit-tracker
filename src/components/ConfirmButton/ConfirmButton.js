// import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const ConfirmButton = props => (
  <Button
    buttonStyle={styles.button}
    title={props.title}
    onPress={props.onPress}
    disabled={props.disabled}
  />
);
export default ConfirmButton;
