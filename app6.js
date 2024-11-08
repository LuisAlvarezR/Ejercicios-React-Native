import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MusicScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Nobody_Is_Listening_%28album%29.jpg' }} style={styles.albumCover} />
      <Text style={styles.songTitle}>Sweat</Text>
      <Text style={styles.artistName}>ZAYN</Text>

      <TouchableOpacity style={styles.likeButton}>
        <FontAwesome name="heart" size={30} color="Purple" />
      </TouchableOpacity>

      <View style={styles.controls}>
        <TouchableOpacity>
          <FontAwesome name="backward" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="play" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="forward" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' },
  albumCover: { width: 200, height: 200, borderRadius: 10, marginBottom: 20 },
  songTitle: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  artistName: { fontSize: 18, color: 'gray' },
  likeButton: { marginVertical: 20 },
  controls: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' },
});
