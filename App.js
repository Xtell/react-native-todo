import React, { useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';
async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={() => console.log('Error')}
        onFinish={() => setReady(true)}
      />
    );
  }
  return (
    <TodoState>
      <MainLayout/>
    </TodoState>
  );
}
