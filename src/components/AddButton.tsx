import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/* ====== Types ====== */
interface Props {
  onPress: () => void;
  viewStyles?: ViewStyle;
  buttonStyles?: ViewStyle;
  /**
   * react-native-vector-icon name, defaults to "plus"
   */
  iconName?: string;
  /**
   * react-native-vector-icon color, defaults to "white"
   */
  iconColor?: string;
}

const DEFAULT_ADDICON = 'plus';
const DEFAULT_ADDICON_COLOR = 'white';

/* ====== <AddButton /> ====== */
export const AddButton: React.FC<Props> = ({
  onPress,
  viewStyles = {},
  buttonStyles = {},
  iconName = DEFAULT_ADDICON,
  iconColor = DEFAULT_ADDICON_COLOR,
}) => (
  <View style={{ ...styles.buttonWrapper, ...viewStyles }}>
    <TouchableOpacity
      style={{ ...styles.createNewButton, ...buttonStyles }}
      onPress={onPress}>
      <FontAwesome5 name={iconName} solid color={iconColor} size={26} />
    </TouchableOpacity>
  </View>
);

/* ====== Styles ====== */
const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  createNewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#2979ff',
    borderRadius: 50,
    elevation: 2,
  },
});
