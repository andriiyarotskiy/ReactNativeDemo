import React from 'react';
import {Text, View, StyleSheet, Modal, TextInput, Button} from 'react-native';
import {THEME} from '../theme';

export const EditModal = ({visible, onCancel}) => {
  return (
    <Modal transparent={false} animationType="slide" visible={visible}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter your title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
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
            <Button title="Save" />
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
