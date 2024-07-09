// /* eslint-disable no-unused-vars */
// import { ClassNames } from '@emotion/react';
// import React, { useState } from 'react';
// import './Carrocel.css'
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   // CarouselCaption,
// } from 'reactstrap';

// const items = [
//   {
//     src: 'src/components/carrocel/assets/img1.jpg',
//     // altText: 'Slide 1',
//     // caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'src/components/carrocel/assets/iphone2.png',
//     // altText: 'Slide 2',
//     // caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'src/components/carrocel/assets/iphone1.png',
//     // altText: 'Slide 3',
//     // caption: 'Slide 3',
//     key: 3,
//   },
// ];

// function Carrocel(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem className='carrocelItem'
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.key}
//       >
//         <img src={item.src} alt={item.altText} />
//          {/* <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />  */}
//       </CarouselItem>
//     );
//   });

//   return (
//     < >
//     {/* <div className='CarrocelContainer'> */}
//     <Carousel className='CarrocelBox' interval='3000' dark={false}
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
    
//       >
//        <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
        
       
//        /> 
//       {slides}
//       <CarouselControl className='CarrocelControl'
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//         onMouseEnter={previous}
        
//       />
//       <CarouselControl className='CarrocelControl'
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//         onMouseEnter={next}
//       />
//     </Carousel>
//       {/* </div> */}
//     </>
//   );
// }

// export default Carrocel;

import React, { useState, useRef } from 'react';
import './Carrocel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'src/components/carrocel/assets/img1.jpg',
    key: 1,
  },
  {
    src: 'src/components/carrocel/assets/iphone2.png',
    key: 2,
  },
  {
    src: 'src/components/carrocel/assets/iphone1.png',
    key: 3,
  },
];

function Carrocel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className='carrocelItem'
        key={item.key}
        ref={carouselRef} // Adicionar ref aqui se necessário
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={`Slide ${index}`} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className='CarrocelBox'
      interval={3000}
      dark={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        className='CarrocelControl'
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
        onMouseEnter={previous}
      />
      <CarouselControl
        className='CarrocelControl'
        direction='next'
        directionText='Next'
        onClickHandler={next}
        onMouseEnter={next}
      />
    </Carousel>
  );
}

export default Carrocel;
