import React from 'react';
import PropTypes from 'prop-types';
import {View, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CASES_STUDIES} from '../../consts';
import Arrowbtn from '../ArrowBtn';
import CaseStudieCard from '../CaseStudieCard';
import {styles} from './styles';

const CaseStudiesList = ({
  carouselRef,
  activedItemId,
  handleOnSnapToItem,
  handleSnapToNext,
  handleSnapToPrev,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {activedItemId > 0 && (
        <Arrowbtn arrow="left" handleOnPress={handleSnapToPrev} />
      )}
      <Carousel
        ref={carouselRef}
        data={CASES_STUDIES}
        sliderWidth={width}
        itemWidth={width}
        renderItem={CaseStudieCard}
        onSnapToItem={handleOnSnapToItem}
      />
      {activedItemId !== carouselRef?.current?._positions.length - 1 && (
        <Arrowbtn arrow="right" handleOnPress={handleSnapToNext} />
      )}
    </View>
  );
};

CaseStudiesList.propTypes = {
  carouselRef: PropTypes.object,
  activedItemId: PropTypes.number,
  handleOnSnapToItem: PropTypes.func,
  handleSnapToNext: PropTypes.func,
  handleSnapToPrev: PropTypes.func,
};

export default CaseStudiesList;
