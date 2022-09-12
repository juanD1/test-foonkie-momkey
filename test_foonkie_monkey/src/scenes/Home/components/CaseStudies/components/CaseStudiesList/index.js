import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CASES_STUDIES} from '../../consts';
import CaseStudieCard from '../CaseStudieCard';

const CaseStudiesList = () => {
  const {width} = useWindowDimensions();
  const [activedItemId, setActivedItemId] = useState(0);

  const handleOnSnapToItem = index => setActivedItemId(index);

  return (
    <View style={{alignItems: 'center', marginVertical: 32}}>
      <Carousel
        layout={'default'}
        // ref={ref => (this.carousel = ref)}
        data={CASES_STUDIES}
        sliderWidth={width}
        itemWidth={width}
        renderItem={CaseStudieCard}
        onSnapToItem={handleOnSnapToItem}
      />
    </View>
  );
};

export default CaseStudiesList;
