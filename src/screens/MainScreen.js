import React from 'react';
import {FlatList, StyleSheet, Image, View} from 'react-native';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id}
      data={todos}
      renderItem={({item}) => (
        <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
      )}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require('../../assets/no-items.png')}
        />
      </View>
    );
  }
  return (
    <View>
      <AddTodo addTask={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
