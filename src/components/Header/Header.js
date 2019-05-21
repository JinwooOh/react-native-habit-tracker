import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = ({ onPress }) => (
  <SafeAreaView style={styles.container}>
    <Button
      type="clear"
      icon={
        <Icon type="ionicon" name="ios-add-circle" color="#517fa4" size={32} />
      }
      onPress={onPress}
    />
  </SafeAreaView>
);
export default Header;
