import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AddButton } from '../components/AddButton';
import { TabColors } from '../util/Palette';

const Workouts: React.FC = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{`Hey!`}</Text>
      </View>
      <AddButton onPress={() => {}} buttonStyles={styles.buttonColor} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: undefined,
  },
  title: {
    fontSize: 22,
  },
  buttonColor: {
    backgroundColor: TabColors.Workouts
  }
});

export default Workouts;