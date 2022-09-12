import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import {CASES_STUDIES} from '../../consts';
import IndustryItem from '../IndustryItem';
import {styles} from './styles';

const IndustriesNav = ({activedItemId, handleSnapToItem}) => (
  <View>
    <FlatList
      contentContainerStyle={styles.container}
      data={CASES_STUDIES}
      numColumns={4}
      renderItem={({item, index}) => (
        <IndustryItem
          id={index}
          industry={item.industry}
          actived={!!(item.id === activedItemId)}
          handleOnPress={handleSnapToItem}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

IndustriesNav.propTypes = {
  activedItemId: PropTypes.number,
  handleSnapToItem: PropTypes.func,
};

export default IndustriesNav;
