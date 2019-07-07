import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { ProgressCharts } from '../components/ProgressCharts';

class Progress extends Component {
  render() {
    const { habitList } = this.props;
    return (
      <Container>
        <SafeAreaView>
          <Text> Progress 😃 </Text>
          <ProgressCharts habitList={habitList} />
        </SafeAreaView>
      </Container>
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
