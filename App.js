import React, {useState} from 'react';
import {Alert, LogBox, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
LogBox.ignoreLogs(['Remote debugger']);

const state = [
  {title: 'test1', id: '1'},
  {title: 'test2', id: '2'},
  {title: 'test3', id: '3'},
];
const App = () => {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodo] = useState([{title: 'test1', id: '1'}]);

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        title: title.trim(),
        id: Date.now().toString(),
      };
      setTodo([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      'Remove element',
      `Are you sure you want remove "${todo.title}" ?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodo(todos.filter((todo) => todo.id !== id));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const updateTodo = (id, title) => {
    setTodo((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      }),
    );
  };

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        onRemove={removeTodo}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title={'Todo App'} />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});

export default App;
