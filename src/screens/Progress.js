import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
// import { ProgressCharts } from '../components/ProgressCharts';
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
    const {
      name,
      startDate,
      isDaily,
      dailyInfo,
      weeklyInfo,
      checkList,
    } = selectedHabit;

    const weeklyGoal = calculateWeeklyGoal(
      isDaily,
      weeklyInfo,
      dailyInfo,
      checkList
    );
    console.log('wg:', weeklyGoal);

    return (
      <ScrollView>
        <SafeAreaView>
          <SelectHabit
            habits={habitList}
            handleSelectedHabit={this.handleSelectedHabit}
          />
          {this.hasSelected() ? (
            <DetailHabit
              {...this.props}
              habit={selectedHabit}
              done={weeklyGoal.done}
              goal={weeklyGoal.goal}
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
