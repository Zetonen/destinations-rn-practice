import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {Data} from '../data/data';

export type RootStackParamList = {
  Home: undefined;
  Detail: {item: Data};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Home',
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigation;
