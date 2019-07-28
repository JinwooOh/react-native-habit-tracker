import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { ProgressCharts } from '../components/ProgressCharts';
import { SelectHabit } from '../components/SelectHabit';

class Progress extends Component {
  state = {
    selectedHabit: {},
  };

  handleSelectedHabit = habit => {
    this.setState({ selectedHabit: { ...habit } });
  };

  render() {
    const { habitList } = this.props;
    return (
      <ScrollView>
        <SafeAreaView>
          <Text> Progress 😃 </Text>
          <SelectHabit
            habits={habitList}
            handleSelectedHabit={this.handleSelectedHabit}
          />
          <ProgressCharts habitList={habitList} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { habitList } = state.habits;
  return {
    habitList,
  };
};

export default connect(mapStateToProps)(Progress);
