import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#4caf50', '#81c784']} 
      style={styles.gradient}
    >
      <View style={styles.container}> 
        <Text style={styles.text}>Municipalidad de Quinchao</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600', 
    color: 'green', 
  },
});

export default App;
