import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const BookmarkedNFTs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Bookmarked PAGE</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    padding: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default BookmarkedNFTs;
