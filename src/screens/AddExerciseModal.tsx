import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getConnection } from 'typeorm';
import { Exercise } from '../entities/Exercise';

const AddExerciseModal: React.FC = () => {
  const [exerciseName, setExerciseName] = useState<string>('');
  const [maxWeight, setMaxWeight] = useState<string>('');

  const saveNewExercise = async () => {
    try {
      await getConnection();

      await Exercise.save({
        name: exerciseName,
        // FIXME Temporary lazy solution while getting boilerplate up, assumes value entered is numeric
        highestWeight: Number(maxWeight),
      } as Exercise);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '70%',
          height: '80%',
          borderRadius: 4,
        }}>
        <Text>Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={exerciseName => setExerciseName(exerciseName)}
        />
        <Text>Current max</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={maxWeight => setMaxWeight(maxWeight)}
        />
        <Button title="Save" onPress={async () => await saveNewExercise()} />
      </View>
    </View>
  );
};

export default AddExerciseModal;
