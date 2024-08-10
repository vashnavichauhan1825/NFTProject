import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AllNFTs from './screens/AllNFTs';
import NFTDetails from './screens/NFTDetails';
import BookmarkedNFTs from './screens/BookmarkedNFTs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function NFTStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllNFTs"
        component={AllNFTs}
        options={{title: 'All NFTs'}}
      />
      <Stack.Screen
        name="NFTDetails"
        component={NFTDetails}
        options={{title: 'NFT Details'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="NFTs"
          component={NFTStack}
          options={{title: 'All NFTs'}}
        />
        <Tab.Screen
          name="Bookmarks"
          component={BookmarkedNFTs}
          options={{title: 'Bookmarked NFTs'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
