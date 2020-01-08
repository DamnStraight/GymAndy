import React from 'react';
import { View, Text } from 'react-native';
import { Workout } from '../entities/Workout';

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <View>
      <Text>
        {`${JSON.stringify(workout)}`}
      </Text>
    </View>
  )
};