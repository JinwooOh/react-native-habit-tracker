import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
// import Swipeout from 'react-native-swipeout';
// import SvgUri from 'react-native-svg-uri';
// import Smile from '../../img/smile.svg';
import styles from './styles';
import { checkHabit } from '../../actions/habits';
import { showHabits } from '../../util/showHabits';
import { CheckHabitButton } from '../CheckHabitButton';

// const swipeoutBtns = [
//   {
//     backgroundColor: '#fff',
//     component: (
//       <View style={{ backgroundColor: 'red', padding: 5 }}>
//         <Button
//           type="clear"
//           icon={
//             <Icon
//               type="ionicon"
//               name="ios-checkmark-circle"
//               color="#517fa4"
//               size={24}
//             />
//           }
//         />
//       </View>
//     ),
//   },
// ];

class HabitList extends Component {
  handleCheckButton = habit => {
    this.props.dispatch(checkHabit(habit.name, this.props.date));
  };

  render() {
    return (
      <View style={styles.container}>
        {showHabits(this.props.date, this.props.habitList).map(habit => (
          <View
            style={styles.habitItemContainer}
            // autoClose
            // right={swipeoutBtns}
            key={habit.name}
          >
            <View style={styles.habitItem}>
              <CheckHabitButton
                habit={habit}
                date={this.props.date}
                handleCheckButton={this.handleCheckButton}
              />

              <TouchableOpacity
                style={styles.textBox}
                onPress={() => this.props.handleViewHabit(habit)}
              >
                <Text style={styles.text}>{habit.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { habitList } = state.habits;
  return {
    habitList,
  };
};

export default connect(mapStateToProps)(HabitList);
