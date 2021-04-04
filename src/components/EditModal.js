import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View, Alert} from 'react-native';
import {THEME} from '../theme';

export const EditModal = ({visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimal title name must be 3 letters. Now you have ${
          title.trim().length
        } symbols`,
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal transparent={false} animationType="slide" visible={visible}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter your title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={THEME.DENGER_COLOR}
              onPress={onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button title="Save" onPress={saveHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '80%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
});
