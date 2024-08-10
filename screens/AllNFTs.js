import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import {fetchNFTs} from '../services/service';
import styles from '../styles';

const AllNFTs = ({navigation}) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const data = await fetchNFTs();
      setNfts(data);
    };
    loadNFTs();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('NFTDetails', {nft: item.nft_data})}>
      <View style={styles.cardContainer}>
        <Image
          source={{uri: item.nft_data.external_data.image}}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.nft_data.external_data.name}</Text>
          <Text style={styles.terText} numberOfLines={1}>
            {item.nft_data.current_owner}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={nfts}
      renderItem={renderItem}
      keyExtractor={item => item.nft_data.token_id.toString()}
    />
  );
};

export default AllNFTs;
