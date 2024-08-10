import React from 'react';
import {AppTabs} from './Tabs';
import {NavigationContainer} from '@react-navigation/native';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};
