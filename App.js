import React from 'react';
import { View } from 'react-native';
import { Header } from './components/Header';
import { ImagesList } from './components/ImagesList';

export default function App() {
  return (
    <View>
      <Header />
      <ImagesList />
    </View>
  );
}
