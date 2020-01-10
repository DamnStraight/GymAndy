import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AddButton } from '../components/AddButton';
import TabColors from '../util/Palette';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import {
  TabNavigatorParamList,
  NavigatorScreens,
  RootStackParamList,
  NavigatorModals,
} from '../TabNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type WorkoutNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<
    TabNavigatorParamList,
    NavigatorScreens.WORKOUTS
  >,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: WorkoutNavigationProp;
};

const Workouts: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{`Hey!`}</Text>
      </View>
      <AddButton
        onPress={() => navigation.navigate(NavigatorModals.ADD_WORKOUT)}
        buttonStyles={styles.buttonColor}
      />
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
    backgroundColor: TabColors.Workouts,
  },
});

export default Workouts;
