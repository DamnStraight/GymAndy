import 'reflect-metadata';
import 'react-native-gesture-handler';

import { NavigationNativeContainer } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Connection, createConnection, getConnection } from 'typeorm';
import { Exercise } from './entities/Exercise';
import { ExerciseRoutine } from './entities/ExerciseRoutine';
import { Workout } from './entities/Workout';
import TabNavigator from './TabNavigator';
import { useConnection } from './hooks/useConnection';

const App = () => {

  useEffect(() => {
    const connect = async () => {
      console.log("heh nothin personel");
      const connection = await createConnection({
        type: 'react-native',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Exercise, ExerciseRoutine, Workout],
      });

      const test = new Exercise();
      test.name = 'Thrust';
      test.highestWeight = 0;
      await test.save();

      console.warn(await Exercise.findOne({ id: 1 }));
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
