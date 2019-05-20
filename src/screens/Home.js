import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { HabitList } from '../components/HabitList';

class Home extends Component {
  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('AddHabit');
  };

  render() {
    return (
      <Container>
        <Header onPress={this.handleOptionsPress} />
        <HabitList />
      </Container>
    );
  }
}

export default Home;
