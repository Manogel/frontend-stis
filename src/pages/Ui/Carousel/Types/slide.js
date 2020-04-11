import React, { useMemo, useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';

import smimg1 from '~/assets/images/small/img-1.jpg';
import smimg2 from '~/assets/images/small/img-2.jpg';
import smimg3 from '~/assets/images/small/img-3.jpg';

const items = [
  {
    src: smimg1,
    altText: 'First slide',
    caption: 'Slide 1',
  },
  {
    src: smimg2,
    altText: 'Second slide',
    caption: 'Slide 2',
  },
  {
    src: smimg3,
    altText: 'Third slide',
    caption: 'Slide 3',
  },
];

export default function Slide() {
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
    </Carousel>
  );
}
