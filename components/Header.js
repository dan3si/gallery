import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../images/unsplash_logo.png')}
      />
      <Text style={styles.heading}>Unsplash</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingBottom: 8,
    paddingLeft: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  
  logo: {
    height: 40,
    width: 40,
  },

  heading: {
    marginLeft: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
})
