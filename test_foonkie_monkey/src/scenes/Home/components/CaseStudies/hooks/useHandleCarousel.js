import {useState} from 'react';

const useHandleCarousel = carouselRef => {
  console.log('ref useHandleCarousel: ', carouselRef);
  const [activedItemId, setActivedItemId] = useState(0);

  const handleOnSnapToItem = index => setActivedItemId(index);

  const handleSnapToNext = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };

  const handleSnapToPrev = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  };

  return {handleOnSnapToItem, handleSnapToNext, handleSnapToPrev};
};

export default useHandleCarousel;
