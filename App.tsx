import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import TodoList from './src/Components/TodoList';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/Components/AddTodo';
import { NativeBaseProvider, Box } from 'native-base';
import Context from './src/context'
import component from 'native-base/lib/typescript/factory/component';


export default function App() {

  let [todos, setTodos] =  useState([{
    id: 1,
    description: ' Make Money',
    completed: false
  },
  {
    id: 2,
    description: 'Buy Milk',
    completed: false
  },
  {
    id: 3,
    description: 'Oven pizza',
    completed: false
  }])

  const addTodo = (description: string) =>{
    const newTodo = {
      id: Date.now(),
      description: description,
      completed: false
    }
    setTodos(prev => [
       ...prev,
       newTodo
    ])
  }
    
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <Context.Provider value={{ removeTodo, toggleTodo }}>
      <NativeBaseProvider>
      <View style={styles.container}>
        <Navbar></Navbar>

        <View style={styles.content}>
          <AddTodo onSubmit={addTodo}></AddTodo>
          
          <ScrollView>
            <TodoList todos={todos}/>
          </ScrollView>
        </View>

      </View>
      </NativeBaseProvider>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    width: '80%',
    borderBottomWidth: 2,
    padding: 5,
  },
});
