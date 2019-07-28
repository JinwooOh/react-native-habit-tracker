import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const ProgressCharts = props => {
  console.log(props.habitList);
  const thisWeek = props.habitList.reduce((acc, cur) => {
    if (cur.startDate.isBefore(acc.startDate)) {
      return cur;
    }
    return acc;
  }, []);
  console.log(thisWeek);

  const chartConfig = {
    backgroundColor: 'black',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: () => 'black',
    strokeWidth: 2, // optional, default 3
  };
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        data: [0.9, 0.5, 1, 0.2, 1, 0.8],
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
    ],
  };
  return (
    <View>
      <Text>Completion Rate</Text>

      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        withDots={false}
      />
    </View>
  );
};

export default ProgressCharts;
