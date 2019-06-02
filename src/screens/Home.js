import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { HabitList } from '../components/HabitList';
import { Calendar } from '../components/Calendar';

class Home extends Component {
  state = {
    selectedDate: moment(),
  };

  handleAddNewHabit = () => {
    const { navigation } = this.props;
    navigation.navigate('AddHabit');
  };

  handleViewHabit = habit => {
    const { navigation } = this.props;
    // pass haibt as props
    navigation.navigate('ViewHabit', { habit });
  };

  onDateSelected = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <Container>
        <Header onPress={this.handleAddNewHabit} />
        <Calendar
          onDateSelected={this.onDateSelected}
          selectedDate={this.state.selectedDate}
        />
        <HabitList
          date={this.state.selectedDate}
          handleViewHabit={this.handleViewHabit}
        />
      </Container>
    );
  }
}

export default Home;
