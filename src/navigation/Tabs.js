import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppStack} from './Stack';
import BookmarkedNFTs from '../screens/BookmarkedNFTs';
import colors from '../../colors';
import Saved from '../assets/images/saved.svg';
import List from '../assets/images/list.svg';
import {SVGImage} from '../components/SVGImage';
const Tab = createBottomTabNavigator();

const tabBarStyle = {
  backgroundColor: colors.secondary,
  opacity: 0.9,
  height: 70,
  paddingTop: 10,
  paddingBottom: 10,
};

const renderTabBarIcon = assetSrc => () =>
  <SVGImage assetSrc={assetSrc} width={32} height={32} fill={'#fff'} />;

export const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle}}>
      <Tab.Screen
        name="NFTs"
        component={AppStack}
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
  );
};
