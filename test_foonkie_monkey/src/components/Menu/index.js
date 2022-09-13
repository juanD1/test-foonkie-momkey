import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {TouchableOpacity, Image} from 'react-native';
import IconMenu from './img/icon-menu.png';
import {styles} from './styles';

const Menu = () => {
  const navigation = useNavigation();

  const handleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <TouchableOpacity style={styles.menu} onPress={() => handleMenu()}>
      <Image source={IconMenu} />
    </TouchableOpacity>
  );
};

export default Menu;
