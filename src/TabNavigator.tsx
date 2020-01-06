import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dashboard from './screens/Dashboard';
import ExerciseScreen from './screens/Exercise';
import AddExerciseModal from './screens/AddExerciseModal';

const Tab = createMaterialBottomTabNavigator();

const WorkoutScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Workouts!</Text>
  </View>
);

// const ExerciseScreen: React.FC = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Exercises!</Text>
//   </View>
// );

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator shifting activeColor="white">
      <Tab.Screen
        name="Today"
        component={Dashboard}
        options={{
          tabBarColor: '#6200ea',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-day" solid color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutScreen}
        options={{
          tabBarColor: '#dd2c00',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heartbeat" solid color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExerciseScreen}
        options={{
          tabBarColor: '#2979ff',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" solid color={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen
        name="AddExerciseModal"
        component={AddExerciseModal}
        options={{ cardStyle: { backgroundColor: 'transparent' } }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
