import React from 'react';

import styles from './Main.module.scss';
import Image from 'next/image';
import { MainSlider } from './Slider';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const MainComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.empty}></div>
        <div className={styles.body}>
          <h2 className={`${styles.subtitle} slideDownAnimation`}>Building Your Dreams</h2>
          <h1 className={`${styles.title} slideUpAnimation`}>
            Real Estate in Dubai: Ideal for Living and Investing
          </h1>
        </div>
        <div className={styles.bottom}>
          <button className={`${styles.btn}`}>
            <div className={styles.svg_phone}>
              <SvgIcon src={IconsEnum.phone} />
            </div>
            <span>Contact Us Now</span>
          </button>
          <div className={styles.interior}>
            <div className={`${styles.text} slideInLeftAnimation`}>Explore All Our Properties</div>
            <div className={`${styles.image} scaleAnimation`}>
              <Image src={'/images/main/2.png'} width={70} height={70} alt="interior" />
              <button className={styles.icon}>
                <SvgIcon src={IconsEnum.arrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MainSlider />
    </section>
  );
};
