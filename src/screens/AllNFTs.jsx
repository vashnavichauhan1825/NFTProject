import React, {useEffect, useState} from 'react';
import {fetchNFTs} from '../services/service';
import NFTList from '../components/NFTList';
const AllNFTs = ({navigation}) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const data = await fetchNFTs();
      setNfts(data);
    };
    loadNFTs();
  }, []);

  const handlePress = item => {
    navigation.navigate('NFTDetails', {nft: item});
  };

  return (
    <NFTList
      data={nfts.map(item => item.nft_data)}
      onPress={handlePress}
      emptyMessage="No NFTs available."
    />
  );
};

export default AllNFTs;
