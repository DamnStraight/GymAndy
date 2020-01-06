import React from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Exercise } from '../entities/Exercise';
import ExerciseCard from '../util/ExerciseCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const sampleExercises: Exercise[] = [
  {
    id: 1,
    name: 'Bicep curl',
    highestWeight: 35,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 2,
    name: 'Hammer curl',
    highestWeight: 35,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 3,
    name: 'Squat',
    highestWeight: 0,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 4,
    name: 'Bicep curl',
    highestWeight: 0,
    createDate: new Date(),
    updateDate: new Date(),
  },
] as Exercise[];

const ExerciseScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={sampleExercises}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
        keyExtractor={item => String(item.id)}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.createNewButton} onPress={() => navigation.navigate('AddExerciseModal')}>
          <FontAwesome5 name="plus" solid color={'white'} size={26} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  createNewButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#2979ff',
    borderRadius: 50,
  },
});

export default ExerciseScreen;
