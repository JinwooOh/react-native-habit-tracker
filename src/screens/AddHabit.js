import React, { Component } from 'react';
import { Button, TouchableHighlight, DatePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { InputWithButton } from '../components/TextInput';
import { addNewHabit } from '../actions/habits';
import { Container } from '../components/Container';
import { RepeatSelector } from '../components/RepeatSelector';
import { StartDate } from '../components/StartDate';
import { ConfirmButton } from '../components/ConfirmButton';

class AddHabit extends Component {
  state = {
    name: '',
    repeat: '',
    startDate: moment(new Date()).format('MMM Do YY'),
    isDaily: true,
    dailyInfo: [true, true, true, true, true, true, true], // ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weeklyInfo: 1,
    checkList: [],
    isDateTimePickerVisible: false,
  };

  handleChangeText = input => {
    this.setState({ name: input });
  };

  handleRepeatSelector = input => {
    this.setState({ repeat: input });
  };

  handleIsDaily = () => {
    this.setState({ isDaily: !this.state.isDaily });
  };

  handlePressAddHabit = () => {
    this.props.dispatch(
      addNewHabit({
        name: this.state.name,
        repeat: this.state.repeat,
        startDate: this.state.startDate,
        isDaily: this.state.isDaily,
        dailyInfo: this.state.dailyInfo,
        weeklyInfo: this.state.weeklyInfo,
        checkList: this.state.checkList,
      })
    );
    this.setState({ name: '' });
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  handleStartDateChange = input => {
    this.setState({ startDate: input });
  };

  handleUpdateWeeklyInfo = index => {
    this.setState({ weeklyInfo: index + 1 });
  };

  handleUpdateDailyInfo = index => {
    const updatedInfo = [...this.state.dailyInfo];
    updatedInfo[index] = !updatedInfo[index];
    this.setState({ dailyInfo: updatedInfo });
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ startDate: moment(date).format('MMM Do YY') });
    this.hideDateTimePicker();
    console.log(this.state.startDate);
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

        <StartDate
          value={this.state.startDate}
          isDateTimePickerVisible={this.state.isDateTimePickerVisible}
          showDateTimePicker={this.showDateTimePicker}
          hideDateTimePicker={this.hideDateTimePicker}
          handleDatePicked={this.handleDatePicked}
        />

        <RepeatSelector
          handleRepeatSelector={this.handleRepeatSelector}
          handleUpdateWeeklyInfo={this.handleUpdateWeeklyInfo}
          handleUpdateDailyInfo={this.handleUpdateDailyInfo}
          handleIsDaily={this.handleIsDaily}
          {...this.props}
          {...this.state}
        />

        <ConfirmButton
          disabled={this.state.name.length === 0}
          onPress={this.handlePressAddHabit}
        />
      </Container>
    );
  }
}

export default connect()(AddHabit);
