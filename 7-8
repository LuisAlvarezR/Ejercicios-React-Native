import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const App = () => {
  const handleOpenSpotifyZayn = () => {
    Linking.openURL('https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81'); // Spotify de Zayn
  };

  const handleOpenWikipediaZayn = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Zayn_Malik'); // Wikipedia de Zayn
  };

  const handleOpenSpotifyEminem = () => {
    Linking.openURL('https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR'); // Spotify de Eminem
  };

  const handleOpenWikipediaEminem = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Eminem'); // Wikipedia de Eminem
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tarjeta de Zayn */}
      <View style={styles.card}>
        <Icon name="music-note" type="material" size={40} color="#1DB954" style={styles.icon} />
        <Text style={styles.title}>Zayn Malik</Text>
        <Text style={styles.subtitle}>Álbum destacado: *Mind of Mine*</Text>
        <Text style={styles.description}>
          Zayn Malik es un cantante británico conocido por su estilo único y su éxito en solitario tras One Direction.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenSpotifyZayn}>
            <Text style={styles.buttonText}>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOpenWikipediaZayn}>
            <Text style={styles.buttonText}>Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta de Eminem */}
      <View style={styles.card}>
        <Icon name="mic" type="material" size={40} color="#1DB954" style={styles.icon} />
        <Text style={styles.title}>Eminem</Text>
        <Text style={styles.subtitle}>Álbum destacado: *The Marshall Mathers LP*</Text>
        <Text style={styles.description}>
          Eminem es un rapero estadounidense y una leyenda del hip-hop, conocido por éxitos como *Lose Yourself* y *Stan*.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenSpotifyEminem}>
            <Text style={styles.buttonText}>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOpenWikipediaEminem}>
            <Text style={styles.buttonText}>Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
