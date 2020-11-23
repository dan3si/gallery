import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { ImageCard } from './ImageCard';
import { BASE_URL, accessToken } from '../global/API';

export const ImagesList = () => {
  const [images, setImages] = useState([]);

  const updateImages = async () => {
    const response = await fetch(`${BASE_URL}${accessToken}`);
    const data = await response.json();
    setImages(data);
  }

  useEffect(updateImages, []);

  return (
    <ScrollView contentContainerStyle={styles.imagesList}>
      {images.map(image => (
        <ImageCard
          imgData={image}
          updateImages={updateImages}
          key={image.id}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagesList: {
    alignItems: 'center',
  }
})
