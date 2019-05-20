import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import styles from './styles';

const Header = ({ onPress }) => (
  <SafeAreaView style={styles.container}>
    <Text>"I am a header"</Text>
    <Button onPress={onPress} title="Add Habit" />
  </SafeAreaView>
);
export default Header;
