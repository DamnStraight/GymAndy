import React from 'react';
import { View, Text } from 'react-native';

const AddExerciseModal: React.FC = () => (
  <View
    style={{
      // width: 50,
      // backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2
    }}>
      <View style={{
      backgroundColor: 'white',
      width: '70%',
      height: '80%',
      borderRadius: 4
    }}>
       <Text>
      Today view homie!</Text> 
      </View>
    
  </View>
);

export default AddExerciseModal;