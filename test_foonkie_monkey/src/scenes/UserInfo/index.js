import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, View, Image} from 'react-native';
import SimpleText from 'components/SimpleText';
import {COLORS} from 'styles';
import {styles} from './styles';
import useGetUserInfo from './hook/useGetUserInfo';
import ImagePicker from './components/ImagePicker';

const UserInfo = ({route}) => {
  const {loading, user} = useGetUserInfo(route?.params?.id);

  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <Image style={styles.avatar} source={{url: user.avatar}} />
          <ImagePicker />
          <SimpleText
            style={styles.fullName}
            text={`${user.first_name} ${user.last_name}`}
          />
          <SimpleText text={user.email} />
        </>
      ) : (
        <ActivityIndicator size="large" color={COLORS.ceruleanCrayola} />
      )}
    </View>
  );
};

UserInfo.propTypes = {
  route: PropTypes.object,
};

export default UserInfo;
