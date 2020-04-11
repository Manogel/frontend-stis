import React, { useMemo, useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

import smimg4 from '~/assets/images/small/img-4.jpg';
import smimg5 from '~/assets/images/small/img-5.jpg';
import smimg6 from '~/assets/images/small/img-6.jpg';

const items = [
  {
    src: smimg4,
    altText: 'First slide',
    caption: 'Slide 1',
  },
  {
    src: smimg5,
    altText: 'Second slide',
    caption: 'Slide 2',
  },
  {
    src: smimg6,
    altText: 'Third slide',
    caption: 'Slide 3',
  },
];

export default function Slidewithcontrol() {
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

  return (
    <Carousel activeIndex={activeIndex} next={onNext} previous={onPrevious}>
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
