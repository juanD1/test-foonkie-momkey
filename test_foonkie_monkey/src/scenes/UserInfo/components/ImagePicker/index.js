import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from 'styles';
import {styles} from './styles';

const ImagePicker = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Icon name="image" size={24} color={COLORS.ceruleanCrayola} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Icon name="camera" size={24} color={COLORS.ceruleanCrayola} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;
