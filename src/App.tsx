import { NavigationNativeContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Exercise } from './entities/Exercise';
import { ExerciseRoutine } from './entities/ExerciseRoutine';
import { Workout } from './entities/Workout';
import TabNavigator from './TabNavigator';
import DayOfWeek from './entities/DayOfWeek';

const App = () => {
  useEffect(() => {
    const connect = async () => {
      const connection = await createConnection({
        type: 'react-native',
        database: 'test',
        location: 'default',
        dropSchema: true,
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Exercise, ExerciseRoutine, Workout, DayOfWeek],
      });
    };

    connect();
  }, []);

  return (
    <NavigationNativeContainer>
      <StatusBar barStyle="light-content" />
      <TabNavigator />
    </NavigationNativeContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
