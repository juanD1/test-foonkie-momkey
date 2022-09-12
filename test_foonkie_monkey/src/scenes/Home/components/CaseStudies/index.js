import React, {useRef} from 'react';
import {View} from 'react-native';
import Title from 'components/Title';
import Seprator from 'components/Separator';
import {COLORS} from 'styles';
import {styles} from './styles';
import CaseStudiesList from './components/CaseStudiesList';
import IndustriesNav from './components/IndustriesNav';
import useHandleCarousel from './hooks/useHandleCarousel';

const CaseStudies = () => {
  const carouselRef = useRef();
  const {
    activedItemId,
    handleOnSnapToItem,
    handleSnapToNext,
    handleSnapToPrev,
    handleSnapToItem,
  } = useHandleCarousel(carouselRef);

  return (
    <View style={styles.container}>
      <Title style={styles.title} text="Case studies" />
      <Seprator align="flex-start" color={COLORS.white} />
      <CaseStudiesList
        carouselRef={carouselRef}
        activedItemId={activedItemId}
        handleOnSnapToItem={handleOnSnapToItem}
        handleSnapToNext={handleSnapToNext}
        handleSnapToPrev={handleSnapToPrev}
      />
      <IndustriesNav
        activedItemId={activedItemId}
        handleSnapToItem={handleSnapToItem}
      />
    </View>
  );
};

export default CaseStudies;
