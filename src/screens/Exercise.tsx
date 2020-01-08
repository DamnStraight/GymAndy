import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getConnection } from 'typeorm';
import { AddButton } from '../components/AddButton';
import { Exercise } from '../entities/Exercise';
import ExerciseCard from '../components/ExerciseCard';

const ExerciseScreen = () => {
  const navigation = useNavigation();
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
      <AddButton onPress={() => navigation.navigate('AddExerciseModal')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default ExerciseScreen;
