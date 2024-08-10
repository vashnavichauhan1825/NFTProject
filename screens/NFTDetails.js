import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import colors from '../colors';

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
    <View style={styles.detailContainer}>
      <Image
        source={{uri: nft.external_data.image}}
        style={[styles.detailImg, styles.mt20]}
      />
      <View>
        <Text style={[styles.title, styles.mt20, styles.textCenter]}>
          {nft.external_data.name}
        </Text>
        <Text style={[styles.text, styles.mt20]}>
          Description: {nft.external_data.description}
        </Text>
        <Text style={styles.text}>Current Owner : {nft.current_owner}</Text>
        <Text style={[styles.terText, styles.mt20]}>
          Asset Type : {nft.external_data.assetType}
        </Text>
        <Text style={styles.terText}>
          Asset Size : {nft.external_data.assetSize}
        </Text>
        <Text style={styles.terText}>
          External Url : {nft.external_data.externalURL}
        </Text>
      </View>
      <View style={styles.mt20}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isBookmarked ? colors.primary : colors.cta},
          ]}
          onPress={toggleBookmark}>
          <Text style={styles.secText20}>
            {isBookmarked ? 'Unbookmark' : 'Bookmark'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NFTDetails;
