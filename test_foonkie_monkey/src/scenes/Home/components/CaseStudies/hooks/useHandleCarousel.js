import {useState} from 'react';

const useHandleCarousel = carouselRef => {
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

  const handleSnapToItem = item => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToItem(item);
    }
  };

  return {
    activedItemId,
    handleOnSnapToItem,
    handleSnapToNext,
    handleSnapToPrev,
    handleSnapToItem,
  };
};

export default useHandleCarousel;
