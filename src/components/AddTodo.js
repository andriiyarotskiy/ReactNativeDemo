import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {THEME} from '../theme';

const AddTodo = ({addTask}) => {
  const [value, setValue] = useState('');

  const onPressHandler = () => {
    if (value.trim()) {
      addTask(value);
      setValue('');
    } else {
      Alert.alert('cannot be empty');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.addBtn}
        onPress={onPressHandler}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    padding: 10,
  },
  addBtn: {
    padding: 16,
    backgroundColor: 'aquamarine',
    color: 'white',
  },
});
