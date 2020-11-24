import React, { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

export const ImageScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params.title) {
      navigation.setOptions({
        title: route.params.title,
      });
    }
  }, []);

  return (
    <Image
      source={{ uri: route.params.uri }}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
})
