import React, { useState } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getConnection } from 'typeorm';
import { Exercise } from '../../entities/Exercise';
import { RootStackParamList, NavigatorModals } from '../../TabNavigator';
import { RouteProp } from '@react-navigation/native';

type AddExerciseModalProp = StackNavigationProp<
  RootStackParamList,
  NavigatorModals.ADD_EXERCISE
>;

type AddExerciseModalRouteProp = RouteProp<
  RootStackParamList,
  NavigatorModals.ADD_EXERCISE
>;

type Props = {
  route: AddExerciseModalRouteProp;
  navigation: AddExerciseModalProp;
};

const AddExerciseModal: React.FC<Props> = ({ navigation, route }) => {
  const [exerciseName, setExerciseName] = useState<string>('');
  const [maxWeight, setMaxWeight] = useState<string>('');

  async function onPressHandler() {
    try {
      await getConnection();

      const newExercise = await Exercise.save({
        name: exerciseName,
        // FIXME Temporary lazy solution while getting boilerplate up, assumes value entered is numeric
        highestWeight: Number(maxWeight),
      } as Exercise);

      route.params.onConfirm(newExercise);
    } catch (err) {
      console.log(err);
    }
  }

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
        <Button title="Save" onPress={async () => await onPressHandler()} />
      </View>
    </View>
  );
};

export default AddExerciseModal;
