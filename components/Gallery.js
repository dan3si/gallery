import React, { useState, useEffect } from 'react';
import store from '../redux/store';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';
import { ImageCard } from './ImageCard';
import { downloadImages } from '../redux/actionCreators';

export const Gallery = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    store.subscribe(
      () => {
        if (store.getState().images.length === images.length) {
          return;
        }
  
        setImages(store.getState().images);
        setLoading(false);
      }
    );

    downloadImages();
  }, []);

  return (
    <>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <ImageCard
            imgData={item}
            openImage={() => {
              navigation.navigate('Image', {
                uri: item.urls.regular,
                title: item.description || item.alt_description
              });
            }}
          />
        )}
        onEndReached={() => {
          if (!loading) {
            setLoading(true);
            downloadImages();
          }
        }}
        onEndReachedThreshold={10}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          loading
            ? (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="000000" />
              </View>
            )
            : null
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
