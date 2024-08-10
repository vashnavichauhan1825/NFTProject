import {useEffect, useState} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import {fetchNFTs} from './services/service';

const App = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const data = await fetchNFTs();
      setNfts(data);
    };
    loadNFTs();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity>
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        <Image
          source={{uri: item.nft_data.external_data.image}}
          style={{width: 100, height: 100}}
        />
        <Text>{item.nft_data.external_data.name}</Text>
        <Text>{item.nft_data.current_owner}</Text>
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

export default App;
