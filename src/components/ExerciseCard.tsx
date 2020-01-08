import React from 'react';
import { Exercise } from '../entities/Exercise';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.colorBar}></View>
      <View style={styles.textContainer}>
        <Text>{exercise.name}</Text>
        <Text>{exercise.highestWeight}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    marginBottom: 2.5,
    marginTop: 2.5,
  },
  colorBar: {
    backgroundColor: 'red',
    width: '100%',
    height: 4
  },
  textContainer: {
        marginLeft: 10,
    marginRight: 10,
    padding: 10,
  }
});

export default ExerciseCard;
