import React, { Component } from 'react';
import { View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { InputWithButton } from '../components/TextInput';
import { addNewHabit } from '../actions/habits';
import { Container } from '../components/Container';

class AddHabit extends Component {
  state = {
    inputHabit: '',
  };

  handleChangeText = input => {
    this.setState({ inputHabit: input });
  };

  handlePressAddHabit = () => {
    this.props.dispatch(
      addNewHabit({
        name: this.state.inputHabit,
        done: false,
      })
    );
    this.setState({ inputHabit: '' });
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <InputWithButton
          placeholder="Name"
          buttonText="Button"
          defaultValue={this.state.inputHabit}
          onChangeText={this.handleChangeText}
        />
        <TouchableHighlight onPress={this.handlePressAddHabit}>
          <Button onPress={this.handlePressAddHabit} title="Add Habit" />
        </TouchableHighlight>
      </Container>
    );
  }
}

export default connect()(AddHabit);
