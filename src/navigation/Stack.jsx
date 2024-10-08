import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS, SCREEN_TITLE} from '../utils/Constants';
import colors from '../../colors';
import AllNFTs from '../screens/AllNFTs';
import NFTDetails from '../screens/NFTDetails';
import BookmarkedNFTs from '../screens/BookmarkedNFTs';

const Stack = createStackNavigator();

const headerStyle = {backgroundColor: colors.secondary, opacity: 0.9};
const headerTitleStyle = {color: colors.primary};

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTintColor: colors.primary,
      }}>
      <Stack.Screen
        name={SCREENS.NFTS}
        component={AllNFTs}
        options={{title: SCREEN_TITLE.ALL_NFTS}}
      />
      <Stack.Screen
        name={SCREENS.DETAILS}
        component={NFTDetails}
        options={{title: SCREEN_TITLE.NFT_DETAIL}}
      />
    </Stack.Navigator>
  );
};

export const BookmarkStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
      }}>
      <Stack.Screen
        name={SCREENS.BOOKMARK}
        component={BookmarkedNFTs}
        options={{title: SCREEN_TITLE.BOOKMARK}}
      />
    </Stack.Navigator>
  );
};
