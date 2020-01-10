import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dashboard from './screens/DayView';
import ExerciseScreen from './screens/Exercise';
import AddExerciseModal from './screens/modals/AddExercise';
import TabColors from './util/Palette';
import Workouts from './screens/Workouts';
import { Exercise } from './entities/Exercise';
import ExerciseSelection from './screens/modals/ExerciseSelection';
import AddWorkout from './screens/modals/AddWorkout';

/**
 * All Screens used in the navigator stack
 */
export enum NavigatorScreens {
  /**
   * Used by Root navigator containing modals
   */
  MAIN = 'Main',
  DASHBOARD = 'Dashboard',
  WORKOUTS = 'Workouts',
  EXERCISES = 'Exercises',
}

/**
 * All modal screens in the navigator
 */
export enum NavigatorModals {
  ADD_EXERCISE = 'AddExerciseModal',
  SELECT_EXERCISE = 'SelectExerciseModal',
  ADD_WORKOUT = 'AddWorkoutModal',
}

export type TabNavigatorParamList = {
  Dashboard: undefined;
  Workouts: undefined;
  Exercises: undefined;
};

const Tab = createMaterialBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator shifting activeColor="white">
      <Tab.Screen
        name={NavigatorScreens.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarColor: TabColors.DayView,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-day" solid color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorScreens.WORKOUTS}
        component={Workouts}
        options={{
          tabBarColor: TabColors.Workouts,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heartbeat" solid color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorScreens.EXERCISES}
        component={ExerciseScreen}
        options={{
          tabBarColor: TabColors.Exercises,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" solid color={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

export type RootStackParamList = {
  Main: TabNavigatorParamList;
  AddExerciseModal: {
    onConfirm: (newExercise: Exercise) => void;
  };
  SelectExerciseModal: undefined;
  AddWorkoutModal: undefined;
};

const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name={NavigatorScreens.MAIN} component={TabNavigator} options={{ cardStyle: { backgroundColor: 'transparent' } }}/>
      <RootStack.Screen
        name={NavigatorModals.ADD_EXERCISE}
        component={AddExerciseModal}
        options={{ cardStyle: { backgroundColor: 'transparent' } }}
      />
      <RootStack.Screen
        name={NavigatorModals.SELECT_EXERCISE}
        component={ExerciseSelection}
        options={{ cardStyle: { backgroundColor: 'white' } }}
      />
      <RootStack.Screen
        name={NavigatorModals.ADD_WORKOUT}
        component={AddWorkout}
        options={{ cardStyle: { backgroundColor: 'white' } }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
