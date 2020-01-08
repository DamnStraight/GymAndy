import {
  useNavigation,
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getConnection } from 'typeorm';
import { AddButton } from '../components/AddButton';
import { Exercise } from '../entities/Exercise';
import ExerciseCard from '../components/ExerciseCard';
import {
  RootStackParamList,
  TabNavigatorParamList,
  NavigatorScreens,
  NavigatorModals,
} from '../TabNavigator';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

type ExerciseScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<
    TabNavigatorParamList,
    NavigatorScreens.EXERCISES
  >,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: ExerciseScreenNavigationProp;
};

const ExerciseScreen: React.FC<Props> = () => {
  const navigation = useNavigation<ExerciseScreenNavigationProp>();
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function loadExercises() {
    setLoading(true);
    await getConnection();

    setExerciseList(await Exercise.find());
    setLoading(false);
  }

  useEffect(() => {
    loadExercises();
    setLoading(false);
  }, []);

  return (
    <>
      <FlatList
        data={exerciseList}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
        keyExtractor={item => String(item.id)}
        onRefresh={async () => await loadExercises()}
        refreshing={isLoading}
      />
      <AddButton
      // TODO Fix types on navigate function
        onPress={() =>
          navigation.navigate(NavigatorModals.ADD_EXERCISE, {
            onConfirm: (newExercise: Exercise) => console.log('Test'),
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default ExerciseScreen;
