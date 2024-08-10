import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AllNFTs from './screens/AllNFTs';
import NFTDetails from './screens/NFTDetails';
import BookmarkedNFTs from './screens/BookmarkedNFTs';
import {SVGImage} from './components/SVGImage';
import List from './assets/images/list.svg';
import Saved from './assets/images/saved.svg';
import colors from './colors';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function NFTStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.secondary, opacity: 0.9},
        headerTitleStyle: {color: colors.primary},
      }}>
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
const renderTabBarIcon = assetSrc => () =>
  <SVGImage assetSrc={assetSrc} width={32} height={32} fill={'#fff'} />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.secondary,
            opacity: 0.9,
            height: 70,
            paddingTop: 10,
            paddingBottom: 10,
          },
        }}>
        <Tab.Screen
          name="NFTs"
          component={NFTStack}
          options={{
            headerShown: false,
            tabBarLabel: 'NFTs',
            tabBarActiveTintColor: colors.primary,
            tabBarIcon: renderTabBarIcon(List),
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={BookmarkedNFTs}
          options={{
            tabBarLabel: 'Bookmarks',
            tabBarActiveTintColor: colors.primary,
            tabBarIcon: renderTabBarIcon(Saved),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
