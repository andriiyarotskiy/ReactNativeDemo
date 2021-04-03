import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
  return (
    <View>
      <AddTodo addTask={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
