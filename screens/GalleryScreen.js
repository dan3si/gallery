import React from 'react';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';

export const GalleryScreen = ({ navigation }) => {
  return (
    <>
      <Header />
      <Gallery navigation={navigation} />
    </>
  );
}
