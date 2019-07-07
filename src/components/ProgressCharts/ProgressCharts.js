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
  const getFirstDay = props.habitList.reduce((acc, cur) => {
    if (cur.startDate.isBefore(acc.startDate)) {
      return cur;
    }
    return acc;
  });

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
    ],
  };
  return (
    <View>
      <Text>Completion Rate</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width * 0.88} // from react-native
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ProgressCharts;
