import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from 'scenes/Home';
import Users from 'scenes/Users';
import UserInfo from 'scenes/UserInfo';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="UsersList" component={Users} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="UserInfo" component={UserInfo} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
