import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { BASE_URL, accessToken } from '../global/API';

export const ImageCard = ({ imgData, updateImages }) => {
  const getPostAge = () => {
    let timeUnit = 'days';
    let result = (Date.now() - Date.parse(imgData.created_at)) / 86400000;

    if (result < 1) {
      result *= 24;
      timeUnit = 'hours';
    }

    if (result < 1) {
      result *= 60;
      timeUnit = 'minutes';
    }

    if (Math.floor(result) === 1) {
      timeUnit = timeUnit.slice(0, timeUnit.length - 1);
    }

    return `${Math.floor(result)} ${timeUnit} ago`;
  }
  
  const toggleLike = async () => {
    await fetch(`${BASE_URL}/${imgData.id}/like${accessToken}`, {
      method: imgData.liked_by_user
        ? 'DELETE'
        : 'POST'
    });
    updateImages();
  }

  return (
    <View style={styles.imageCard}>
      <View style={styles.imgInfoTop}>
        <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${imgData.user.instagram_username}`)}>
          <Image
            style={styles.userAvatar}
            source={{ uri: imgData.user.profile_image.medium }}
          />
        </TouchableOpacity>
        <View style={styles.imgHeader}>
          <Text
            style={styles.userName}
            onPress={() => Linking.openURL(`https://www.instagram.com/${imgData.user.instagram_username}`)}
          >
            {imgData.user.username}
          </Text>
          <Text
            onPress={() => Linking.openURL(`https://www.google.com.ua/maps/place/${imgData.user.location}`)}
          >
            {imgData.user.location}
          </Text>
        </View>
      </View>

      <Image
        style={styles.img}
        source={{ uri: imgData.urls.regular }}
      />

      <View style={styles.imgInfoBottom}>
        <View style={styles.likeWrapper}
          /*onPress={toggleLike}*/
        >
          <Image
            style={styles.likeIcon}
            source={require(imgData.liked_by_user
              ? '../images/icons/heart-active.png'
              : '../images/icons/heart.png'
            )}
          />
          <Text>{imgData.likes}</Text>
        </View>
        <Text>{getPostAge()}</Text>
      </View>

      <Text style={styles.imgDescription}>{imgData.description || imgData.alt_description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  imgInfoTop: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgHeader: {
    justifyContent: 'space-around',
  },

  userAvatar: {
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 50,
  },

  imgHeader: {
    marginLeft: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.2,
  },

  imgInfoBottom: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeIcon: {
    height: 30,
    width: 30,
  },

  imgDescription: {
    fontSize: 16,
    paddingHorizontal: 15,
  }
});
