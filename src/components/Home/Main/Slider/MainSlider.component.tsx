import React from 'react';

import styles from './MainSlider.module.scss';

import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MainSliderCard } from './Card';
import { MainSliderItems } from './MainSlider.constants';
import { MainSliderProps } from './MainSlider.types';

export const MainSliderComponent: React.FC<MainSliderProps> = () => {
  const { items } = MainSliderItems;
  return (
    <div className={styles.small}>
      <Swiper
        className={styles.swiper}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
        }}
        speed={2000}
        initialSlide={0}
        modules={[Autoplay]}>
        {items.map(({ image }, i) => (
          <SwiperSlide key={i}>
            <MainSliderCard image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
