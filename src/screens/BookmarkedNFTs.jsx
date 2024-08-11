import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NFTList from '../components/NFTList';
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

  const handlePress = item => {
    navigation.navigate('NFTDetails', {nft: item});
  };

  return (
    <NFTList
      data={bookmarks}
      onPress={handlePress}
      emptyMessage="You haven't bookmarked anything yet!"
    />
  );
};

export default BookmarkedNFTs;
