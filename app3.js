import React from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, Pressable, Image } from 'react-native';

export default function App() {
  const showAlert = () => Alert.alert('Alerta', '¡Has presionado un botón!');

  return (
    <View style={styles.container}>
      <Button title="Mostrar Alerta" onPress={showAlert} />

      <TouchableHighlight style={styles.buttonHighlight} onPress={showAlert} underlayColor="#DDDDDD">
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>

      <Pressable style={styles.buttonPressable} onPress={showAlert}>
        <Image source={{ uri: 'https://path/to/google-icon.png' }} style={styles.icon} />
        <Text style={styles.buttonText}>Botón con Icono</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  buttonHighlight: { backgroundColor: '#4c669f', padding: 10, marginVertical: 10 },
  buttonText: { color: 'white' },
  buttonPressable: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3b5998', padding: 10 },
  icon: { width: 20, height: 20, marginRight: 10 },
});
