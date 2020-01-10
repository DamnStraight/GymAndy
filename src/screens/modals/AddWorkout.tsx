import React, { useState } from 'react';
import {
  FlatList,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import useExerciseList from '../../hooks.ts/useExerciseList';
import { Exercise } from '../../entities/Exercise';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import {
  TabNavigatorParamList,
  NavigatorScreens,
  RootStackParamList,
} from '../../TabNavigator';
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

const AddWorkout: React.FC<Props> = () => {
  const [name, setName] = useState<string>('');
  const [exercises, loading, refreshExerciseList] = useExerciseList(true);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white' , elevation: 3 }}>
        <View style={styles.workoutInput}>
          <Text>Name:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={name => setName(name)}
          />
        </View>
        <View style={styles.workoutInput}>
          <Button title="Assign Exercises" onPress={() => {}} />
        </View>
      </View>
      <SafeAreaView style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
        <FlatList
          data={exercises}
          renderItem={({ item }) => <SelectedExercisesCard exercise={item} />}
          keyExtractor={item => `key-${item.id}`}
        />
      </SafeAreaView>
    </View>
  );
};

type SelecSelectedExercisesCardProps = {
  exercise: Exercise;
};

const SelectedExercisesCard: React.FC<SelecSelectedExercisesCardProps> = ({
  exercise,
}) => {
  const [sets, setSets] = useState<number>(1);
  const [reps, setReps] = useState<number>(1);

  return (
    <View style={styles.selectedExerciseCard}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {exercise.name}
      </Text>
      <View style={styles.setWrapper}>
        <Text>Sets: </Text>
        <Picker
          style={styles.input}
          onValueChange={value => setSets(value)}
          selectedValue={sets}>
          {[...Array(10).keys()].map(number => (
            <Picker.Item
              key={`set-${number}`}
              label={`${number + 1}`}
              value={number + 1}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.setWrapper}>
        <Text>Reps: </Text>
        <Picker
          style={styles.input}
          onValueChange={value => setReps(value)}
          selectedValue={reps}>
          {[...Array(10).keys()].map(number => (
            <Picker.Item
              key={`rep-${number}`}
              label={`${number + 1}`}
              value={number + 1}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedExerciseCard: {
    borderRadius: 4,
    flex: 1,
    // alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: 60,
    // borderBottomWidth: 1,
    // borderBottomColor: 'darkgrey',
    // padding: 10,
    elevation: 3,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    padding: 10
  },
  input: {
    backgroundColor: 'lightgrey',
    // width: 90,
  },
  setWrapper: {
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  workoutInput: {
    padding: 10,
  },
});

export default AddWorkout;
