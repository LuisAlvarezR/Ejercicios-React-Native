import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';










import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Album Cover Image */}
      <View style={styles.albumCoverContainer}>
        <Image
          source={{ uri: 'URL_DE_LA_IMAGEN_DEL_ALBUM' }} // Replace with the actual URL of the album cover
          style={styles.albumCover}
          resizeMode="cover"
        />
        <Text style={styles.songTitle}>Título de la Canción</Text>
        <Text style={styles.artistName}>Nombre del Artista</Text>
      </View>

      {/* Center Like Icon */}
      <View style={styles.likeIconContainer}>
        <Icon name="favorite" size={50} color="red" />
      </View>

      {/* Control Buttons */}
      <View style={styles.controlContainer}>
        <Icon name="skip-previous" size={40} color="black" />
        <Icon name="play-arrow" size={40} color="black" />
        <Icon name="skip-next" size={40} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light background
  },
  albumCoverContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artistName: {
    fontSize: 14,
    color: '#666', // Lighter color for artist name
  },
  likeIconContainer: {
    marginVertical: 20,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%', // Controls take up 60% of the screen width
  },
});

export default App;