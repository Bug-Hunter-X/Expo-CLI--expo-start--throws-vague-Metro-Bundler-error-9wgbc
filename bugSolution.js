import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//Solution: Clear Metro Bundler Cache
//To fix this, you'll need to clear the cache of Metro bundler.  The exact method depends on your operating system:

//On macOS/Linux:
//rm -rf /tmp/metro-bundler-cache-*  

//On Windows:
//rmdir /s /q "C:\Users\%USERNAME%\AppData\Local\Temp\metro-bundler-cache-*" 

//After clearing the cache, try running `expo start` again.