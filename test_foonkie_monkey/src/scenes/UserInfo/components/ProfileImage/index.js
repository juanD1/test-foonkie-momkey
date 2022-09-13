import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from 'styles';
import {styles} from './styles';

const options = {
  maxWidth: 500,
  maxHeight: 500,
  includeExtra: true,
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
};

const ProfileImage = ({userImg}) => {
  const [img, setImg] = useState();

  const handleGalery = async () => {
    const {assets, didCancel} = await launchImageLibrary(options);
    if (!didCancel) {
      setImg(`${assets[0].uri}`);
    }
  };

  const handleCamera = async () => {
    const {assets, didCancel} = await launchCamera(options);
    if (!didCancel) {
      setImg(`${assets[0].uri}`);
    }
  };

  return (
    <>
      <Image style={styles.avatar} source={{url: !img ? userImg : img}} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => handleGalery()}>
          <Icon name="image" size={24} color={COLORS.ceruleanCrayola} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleCamera()}>
          <Icon name="camera" size={24} color={COLORS.ceruleanCrayola} />
        </TouchableOpacity>
      </View>
    </>
  );
};

ProfileImage.propTypes = {
  userImg: PropTypes.string,
};

export default ProfileImage;
