import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import TodoList from "./src/screens/TodoList";

export default function App() {

  return (
    <TodoList></TodoList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});
