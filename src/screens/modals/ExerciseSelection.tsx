import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, CheckBox, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getConnection } from 'typeorm';
import { Exercise } from '../../entities/Exercise';
import { NavigatorModals, RootStackParamList } from '../../TabNavigator';
import TabColors from '../../util/Palette';

type SelectExerciseModalProp = StackNavigationProp<
  RootStackParamList,
  NavigatorModals.SELECT_EXERCISE
>;

type Props = {
  navigation: SelectExerciseModalProp;
};

type SELECTION_EVENT = 'SELECTED' | 'DESELECTED';

const ExerciseSelection: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

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

  function selectHandler(id: string, eventType: SELECTION_EVENT) {
    console.log(`Tapped ${id} event: ${eventType}`);
  }

  return (
    <>
      <FlatList
        data={isLoading ? [] : exerciseList}
        renderItem={({ item }) => (
          <ExerciseSelectionCard exercise={item} onSelect={selectHandler} />
        )}
        keyExtractor={item => String(item.id)}
      />
    </>
  );
};

type SelectionCardProps = {
  exercise: Exercise;
  onSelect: (id: string, eventType: SELECTION_EVENT) => void;
};

const ExerciseSelectionCard: React.FC<SelectionCardProps> = ({
  exercise,
  onSelect,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={{
        ...styles.exerciseTouchableCard,
        // backgroundColor: selected ? TabColors.Exercises : 'white',
      }}
      onPress={() =>
        setSelected(prevState => {
          onSelect(String(exercise.id), prevState ? 'DESELECTED' : 'SELECTED');
          return !prevState;
        })
      }>
      <View>
        <Text>{exercise.name}</Text>
      </View>
      <CheckBox value={selected} />
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  exerciseTouchableCard: {
    height: 70,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey'
  },
});

export default ExerciseSelection;
