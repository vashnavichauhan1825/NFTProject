import {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {fetchNFTs} from './services/service';

const App = () => {
  useEffect(() => {
    const loadNFTs = async () => {
      const data = await fetchNFTs();
      console.log(data);
    };
    loadNFTs();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello, Vashnavi cha</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default App;
