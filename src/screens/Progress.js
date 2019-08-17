import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { ProgressCharts } from '../components/ProgressCharts';
import { SelectHabit } from '../components/SelectHabit';
import { DetailHabit } from '../components/DetailHabit';
import { calculateWeeklyGoal } from '../util/calculateWeeklyGoal';

class Progress extends Component {
  state = {
    selectedHabit: {},
  };

  handleSelectedHabit = habit => {
    this.setState({ selectedHabit: { ...habit } });
  };

  hasSelected = () => Object.keys(this.state.selectedHabit).length !== 0;

  render() {
    const { habitList } = this.props;
    const { selectedHabit } = this.state;

    return (
      <ScrollView>
        <SafeAreaView>
          <Text> Progress 😃 </Text>
          <SelectHabit
            habits={habitList}
            handleSelectedHabit={this.handleSelectedHabit}
          />
          {this.hasSelected() ? (
            <DetailHabit
              {...this.props}
              habit={selectedHabit}
              done={2}
              goal={3}
            />
          ) : null}

          {/* <ProgressCharts habitList={habitList} /> */}
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
