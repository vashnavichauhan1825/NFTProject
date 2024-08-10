import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles';

const BookmarkedNFTs = ({navigation}) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = JSON.parse(
        (await AsyncStorage.getItem('bookmarks')) || '[]',
      );
      setBookmarks(storedBookmarks);
    };
    const unsubscribe = navigation.addListener('focus', loadBookmarks);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('NFTDetails', {nft: item})}>
      <View style={styles.cardContainer}>
        <Image source={{uri: item.external_data.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.external_data.name}</Text>
          <Text style={styles.terText}>{item.current_owner}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.bgTer, styles.flex]}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={item => item.token_id.toString()}
      />
    </View>
  );
};

export default BookmarkedNFTs;
