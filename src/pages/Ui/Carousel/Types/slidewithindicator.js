import React, { useState, useMemo } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import smimg3 from '~/assets/images/small/img-3.jpg';
import smimg4 from '~/assets/images/small/img-4.jpg';
import smimg5 from '~/assets/images/small/img-5.jpg';

const items = [
  {
    src: smimg3,
    altText: 'First slide',
    caption: 'Slide 1',
  },
  {
    src: smimg4,
    altText: 'Second slide',
    caption: 'Slide 2',
  },
  {
    src: smimg5,
    altText: 'Third slide',
    caption: 'Slide 3',
  },
];

export default function Types() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slides = useMemo(
    () =>
      items.map((item) => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img
            src={item.src}
            className="d-block img-fluid"
            alt={item.altText}
          />
        </CarouselItem>
      )),
    []
  );

  function onNext() {
    if (!animating) {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  }

  function onPrevious() {
    if (!animating) {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  }

  function onGoToIndex(newIndex) {
    if (!animating) {
      setActiveIndex(newIndex);
    }
  }

  return (
    <Carousel activeIndex={activeIndex} next={onNext} previous={onPrevious}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={onGoToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={onPrevious}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={onNext}
      />
    </Carousel>
  );
}
