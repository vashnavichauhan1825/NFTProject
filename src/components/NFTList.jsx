import React from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles';

const NFTList = ({data, onPress, emptyMessage}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.cardContainer}>
        <Image source={{uri: item.external_data.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.external_data.name}</Text>
          <Text style={styles.terText} numberOfLines={1}>
            {item.current_owner}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.bgTer, styles.flex]}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.token_id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      )}
    </View>
  );
};

export default NFTList;
