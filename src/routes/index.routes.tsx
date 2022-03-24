import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PostDetail from '../screens/PostDetail';

export type AppStackRoutesParamList = {
  Home: undefined;
  PostDetail: {
    url: string;
  };
};

const Stack = createNativeStackNavigator<AppStackRoutesParamList>();

const AppRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
