import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles';
import colors from '../../colors';

const NFTDetails = ({route}) => {
  const {nft} = route.params;

  const {
    token_id,
    current_owner,
    external_data: {
      image,
      name,
      description,
      assetType,
      assetSize,
      externalURL,
    },
  } = nft;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    (async () => {
      const storedBookmarks = JSON.parse(
        (await AsyncStorage.getItem('bookmarks')) || '[]',
      );
      setIsBookmarked(storedBookmarks.some(item => item.token_id === token_id));
    })();
  }, [token_id]);

  const toggleBookmark = async () => {
    let storedBookmarks = JSON.parse(
      (await AsyncStorage.getItem('bookmarks')) || '[]',
    );

    if (isBookmarked) {
      storedBookmarks = storedBookmarks.filter(
        item => item.token_id !== token_id,
      );
    } else {
      storedBookmarks.push(nft);
    }

    await AsyncStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView contentContainerStyle={[styles.detailContainer, styles.ph10]}>
        <Image source={{uri: image}} style={[styles.detailImg, styles.mt20]} />
        <View>
          <Text style={[styles.title, styles.mt20, styles.textCenter]}>
            {name}
          </Text>
          <Text style={[styles.text, styles.mt20]}>
            Description: {description}
          </Text>
          <Text style={[styles.text, styles.mt20]}>
            Current Owner: {current_owner}
          </Text>
          <Text style={[styles.terText, styles.mt20]}>
            Asset Type: {assetType}
          </Text>
          <Text style={styles.terText}>Asset Size: {assetSize}</Text>
          <Text
            style={styles.terText}
            onPress={() => Linking.openURL(externalURL)}>
            External URL: {externalURL}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default NFTDetails;
