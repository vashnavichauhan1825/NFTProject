import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NFTDetails = ({route}) => {
  const {nft} = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      const bookmarks = JSON.parse(
        (await AsyncStorage.getItem('bookmarks')) || '[]',
      );
      setIsBookmarked(bookmarks.some(item => item.token_id === nft.token_id));
    };
    checkBookmark();
  }, [nft.token_id]);

  const toggleBookmark = async () => {
    let bookmarks = JSON.parse(
      (await AsyncStorage.getItem('bookmarks')) || '[]',
    );
    if (isBookmarked) {
      bookmarks = bookmarks.filter(item => item.token_id !== nft.token_id);
    } else {
      bookmarks.push(nft);
    }
    await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View>
      <Image
        source={{uri: nft.external_data.image}}
        style={{width: 200, height: 200}}
      />
      <Text>{nft.external_data.name}</Text>
      <Text>Description: {nft.external_data.description}</Text>
      <Text>Current Owner : {nft.current_owner}</Text>
      <Text>Asset Type : {nft.external_data.assetType}</Text>
      <Text>Asset Size : {nft.external_data.assetSize}</Text>
      <Text>External Url : {nft.external_data.externalURL}</Text>

      <Button
        title={isBookmarked ? 'Unbookmark' : 'Bookmark'}
        onPress={toggleBookmark}
      />
    </View>
  );
};

export default NFTDetails;
