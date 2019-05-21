import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { HabitList } from '../components/HabitList';
import { Calendar } from '../components/Calendar';

class Home extends Component {
  handleAddNewHabit = () => {
    const { navigation } = this.props;
    navigation.navigate('AddHabit');
  };

  render() {
    return (
      <Container>
        <Header onPress={this.handleAddNewHabit} />
        <Calendar />
        <HabitList />
      </Container>
    );
  }
}

export default Home;
