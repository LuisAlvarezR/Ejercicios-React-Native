import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Image source={require('./assets/LOG_AMBIENTE.gif')} style={styles.imageTop} />
      <Text style={styles.text}>¡Municipalidad de Quinchao!</Text>
      <Image source={{ uri: 'https://path/to/google-logo.png' }} style={styles.imageBottom} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageTop: { width: 200, height: 100, resizeMode: 'contain' },
  text: { fontSize: 20, fontWeight: '600', color: 'white', marginVertical: 10 }, 
  imageBottom: { width: 50, height: 50, marginTop: 20 },
});




