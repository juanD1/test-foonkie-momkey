import React, {useRef, useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CASES_STUDIES} from '../../consts';
import useHandleCarousel from '../../hooks/useHandleCarousel';
import Arrowbtn from '../ArrowBtn';
import CaseStudieCard from '../CaseStudieCard';
import {styles} from './styles';

const CaseStudiesList = () => {
  const carouselRef = useRef();
  const {handleOnSnapToItem, handleSnapToNext, handleSnapToPrev} =
    useHandleCarousel(carouselRef);
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Arrowbtn arrow="left" handleOnPress={handleSnapToPrev} />
      <Carousel
        ref={carouselRef}
        data={CASES_STUDIES}
        sliderWidth={width}
        itemWidth={width}
        renderItem={CaseStudieCard}
        onSnapToItem={handleOnSnapToItem}
      />
      <Arrowbtn arrow="right" handleOnPress={handleSnapToNext} />
    </View>
  );
};

export default CaseStudiesList;
