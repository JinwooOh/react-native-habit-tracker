import React, { Component } from 'react';
import { View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { InputWithButton } from '../components/TextInput';
import { addNewHabit } from '../actions/habits';
import { Container } from '../components/Container';
import { RepeatSelector } from '../components/RepeatSelector';

class AddHabit extends Component {
  state = {
    name: '',
    repeat: '',
    startDate: moment().format('MMM Do YY'),
  };

  handleChangeText = input => {
    this.setState({ name: input });
  };

  handleRepeatSelector = input => {
    console.log(input);
    this.setState({ repeat: input });
  };

  handlePressAddHabit = () => {
    this.props.dispatch(
      addNewHabit({
        ...this.state,
        done: false,
      })
    );
    this.setState({ name: '' });
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <InputWithButton
          placeholder="Name"
          buttonText="Button"
          defaultValue={this.state.name}
          onChangeText={this.handleChangeText}
        />
        <RepeatSelector handleRepeatSelector={this.handleRepeatSelector} />
        <TouchableHighlight onPress={this.handlePressAddHabit}>
          <Button onPress={this.handlePressAddHabit} title="Add Habit" />
        </TouchableHighlight>
      </Container>
    );
  }
}

export default connect()(AddHabit);
