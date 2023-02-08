import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DateHead = () => {
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const dayName = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{new Date().getDate()}</Text>
        </View>
        <View style={styles.monthYear}>
          <Text style={styles.monText}>
            {monthNames[new Date().getMonth()]}
          </Text>
          <Text style={styles.yearText}>{new Date().getFullYear()}</Text>
        </View>
      </View>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{dayName[new Date().getDay()]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    marginVertical: 20,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  date: {
    marginRight: 5,
  },
  dateText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '700',
  },
  monthYear: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
  },
  monText: {
    color: '#9A979B',
    fontSize: 14,
    fontWeight: '800',
  },
  yearText: {
    color: '#9A979B',
    fontSize: 14,
  },
  dayContainer: {
    height: 40,
    justifyContent: 'center',
  },
  dayText: {
    marginTop: 5,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default DateHead;
