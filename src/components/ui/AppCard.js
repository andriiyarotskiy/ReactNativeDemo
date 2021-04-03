import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard = (props) => (
  <View style={{...styles.default, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', // only OS
    shadowRadius: 2, // only OS
    shadowOpacity: 0.3, // only OS
    shadowOffset: {width: 2, height: 2}, // only OS
    elevation: 8, // shadow only for android
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
