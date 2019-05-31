import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import CalendarStrip from 'react-native-calendar-strip';

class Calendar extends Component {
  render() {
    return (
      <View>
        <CalendarStrip
          onDateSelected={date => this.props.onDateSelected(date)}
          calendarAnimation={{ type: 'sequence', duration: 100 }}
          style={{
            height: 90,
            paddingTop: 3,
            paddingBottom: 3,
          }}
          useIsoWeekday={false}
          startingDate={moment().startOf('week')}
          calendarHeaderStyle={{ color: 'grey' }}
          calendarColor="white"
          dateNumberStyle={{ color: 'grey' }}
          dateNameStyle={{ color: 'grey' }}
          highlightDateNumberStyle={{ color: '#517fa4' }}
          highlightDateNameStyle={{ color: '#517fa4' }}
          disabledDateNameStyle={{ color: 'grey' }}
          disabledDateNumberStyle={{ color: 'grey' }}
          maxDate={moment().endOf('month')}
          minDate={moment().startOf('month')}
          iconContainer={{ flex: 0.1 }}
        />
      </View>
    );
  }
}

export default Calendar;
